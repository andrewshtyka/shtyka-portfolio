// #region ============================== Imports

// components
import { LayoutTransition } from "@/components/LayoutTransition/LayoutTransition";
import DynamicCSS from "@/components/DynamicCSS/DynamicCSS";
import LayoutContainer from "../../components/LayoutContainer/LayoutContainer";
import Preloader from "@/components/Preloader/Preloader";

// fonts
import { fontDisplay, fontMono, fontSerif } from "@/lib/util/importFonts";

// providers
import { TooltipProvider } from "@/providers/TooltipProvider/TooltipProvider";
import { ProjectInViewProvider } from "@/providers/ProjectInViewProvider/ProjectInViewProvider";
import { HoverLineProvider } from "@/providers/HoverLineProvider/HoverLineProvider";

// sanity
import { sanityFetchData } from "./_services/sanityFetchData";
import {
	SANITY_ERROR_QUERY,
	SANITY_ERROR_TAGS,
	SANITY_HOME_QUERY,
	SANITY_HOME_TAGS,
} from "@/constants/sanity";

// styles
import "@/styles/globals.css";
import "@/styles/reset.css";
import "@/styles/tokens/tokens.colors.css";
import "@/styles/tokens/tokens.fonts.css";
import "@/styles/tokens/tokens.spacing.css";

// utility
import { cookies } from "next/headers";
import { logCredentials } from "@/lib/util/logCredentials";
import type { Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

// #endregion ===========================

const SITE_URL = "https://andrewshtyka.pp.ua";
const GOOGLE_ANALYTICS_ID: string =
	process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#000000",
};

// meta info
export async function generateMetadata() {
	const cookieStore = await cookies();
	const lang = cookieStore.get("NEXT_LOCALE")?.value ?? "ua";

	const ui = await sanityFetchData({
		query: SANITY_ERROR_QUERY,
		params: { lang },
		tags: SANITY_ERROR_TAGS,
	});

	const uiProfile = await sanityFetchData({
		query: SANITY_HOME_QUERY,
		params: { lang },
		tags: SANITY_HOME_TAGS,
	});

	const isUa = lang === "ua";
	const titleProfile = `${uiProfile?.hero?.heroTitle[0]?.children[0]?.text ?? ""}`;
	const descriptionProfile = `${uiProfile?.hero?.heroTitle[1]?.children[0]?.text ?? ""}`;

	return {
		// Layout is a parent for 404 page,
		// so meta for 404 is taken from layout.
		title: ui?.error404?.title ?? "",
		description: ui?.error404?.description ?? "",

		metadataBase: new URL(SITE_URL),

		authors: [
			{
				name: titleProfile,
				url: SITE_URL,
			},
		],
		creator: titleProfile,

		openGraph: {
			title: titleProfile,
			description: descriptionProfile,
			siteName: descriptionProfile,
			images: [{ url: "/opengraph.webp", width: 1200, height: 630 }],
			locale: isUa ? "uk_UA" : "en_US",
			alternateLocale: isUa ? "en_US" : "uk_UA",
			type: "website",
		},

		twitter: {
			title: titleProfile,
			description: descriptionProfile,
			card: "summary_large_image",
			images: ["/opengraph.webp"],
		},

		robots: {
			index: true,
			follow: true,
			googleBot: { index: true, follow: true },
		},

		alternates: {
			canonical: `https://andrewshtyka.pp.ua/${lang}`,
		},
	};
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}>) {
	const { lang } = await params;
	logCredentials();

	return (
		<html lang={lang}>
			<body
				className={`${fontSerif.variable} ${fontMono.variable} ${fontDisplay.variable}`}
			>
				<Preloader />
				<LayoutTransition
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<DynamicCSS />
					<TooltipProvider>
						<ProjectInViewProvider>
							<HoverLineProvider>
								<LayoutContainer>{children}</LayoutContainer>
							</HoverLineProvider>
						</ProjectInViewProvider>
					</TooltipProvider>
				</LayoutTransition>
			</body>
			
			<GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
		</html>
	);
}

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
import { SANITY_ERROR_QUERY, SANITY_ERROR_TAGS } from "@/constants/sanity";

// styles
import "@/styles/globals.css";
import "@/styles/reset.css";
import "@/styles/tokens/tokens.colors.css";
import "@/styles/tokens/tokens.fonts.css";
import "@/styles/tokens/tokens.spacing.css";

// utility
import { cookies } from "next/headers";

// #endregion ===========================

// error - meta info
export async function generateMetadata() {
	const cookieStore = await cookies();
	const lang = cookieStore.get("NEXT_LOCALE")?.value ?? "ua";

	const ui = await sanityFetchData({
		query: SANITY_ERROR_QUERY,
		params: { lang },
		tags: SANITY_ERROR_TAGS,
	});

	return {
		title: ui?.error404?.title ?? "",
		description: ui?.error404?.description ?? "",
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
		</html>
	);
}

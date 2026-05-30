// #region ============================== Imports

// components
import { LayoutTransition } from "@/components/LayoutTransition/LayoutTransition";
import Menu from "@/components/Menu/Menu";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";
import DynamicCSS from "@/components/DynamicCSS/DynamicCSS";
import LayoutContainer from "../../components/LayoutContainer/LayoutContainer";

// constants
import { SANITY_UI_QUERY, SANITY_UI_TAGS } from "@/constants/sanity";
import { VALID_LOCALES } from "@/constants/routing";

// fonts
import { fontDisplay, fontMono, fontSerif } from "@/lib/util/importFonts";

// providers
import { TooltipProvider } from "@/providers/TooltipProvider/TooltipProvider";
import { ProjectInViewProvider } from "@/providers/ProjectInViewProvider/ProjectInViewProvider";

// styles
import "@/styles/globals.css";
import "@/styles/reset.css";
import "@/styles/tokens/tokens.colors.css";
import "@/styles/tokens/tokens.fonts.css";
import "@/styles/tokens/tokens.spacing.css";

// utility

// #endregion ===========================

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}>) {
	const { lang } = await params;

	return (
		<html
			lang={lang}
			// data-scroll-behavior="smooth"
		>
			<body
				className={`${fontSerif.variable} ${fontMono.variable} ${fontDisplay.variable}`}
			>
				{/* <LayoutTransition
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				> */}
				<DynamicCSS />

				<TooltipProvider>
					<ProjectInViewProvider>
						<LayoutContainer>{children}</LayoutContainer>
					</ProjectInViewProvider>
				</TooltipProvider>

				{/* </LayoutTransition> */}
			</body>
		</html>
	);
}

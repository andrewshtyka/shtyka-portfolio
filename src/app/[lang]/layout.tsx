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

// styles
import "@/styles/globals.css";
import "@/styles/reset.css";
import "@/styles/tokens/tokens.colors.css";
import "@/styles/tokens/tokens.fonts.css";
import "@/styles/tokens/tokens.spacing.css";

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

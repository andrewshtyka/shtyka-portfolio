// #region ============================== Imports

// components
import { LayoutTransition } from "@/components/LayoutTransition/LayoutTransition";
import Menu from "@/components/Menu/Menu";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";

// constants
import { SANITY_UI_QUERY, SANITY_UI_TAGS } from "@/constants/sanity";

// fonts
import { fontDisplay, fontMono, fontSerif } from "@/lib/util/importFonts";

// sanity
import { sanityFetchData } from "@/app/[lang]/_services/sanityFetchData";

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

	const ui = await sanityFetchData({
		query: SANITY_UI_QUERY,
		params: { lang },
		tags: SANITY_UI_TAGS,
	});

	return (
		<html lang={lang}>
			<body
				className={`${fontSerif.variable} ${fontMono.variable} ${fontDisplay.variable}`}
			>
				{/* <LayoutTransition
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				> */}
				<Menu
					lang={lang}
					logo={ui?.logoSvg}
					menu={ui?.menu}
					menuMobile={ui?.menuMobile}
				/>
				{children}
				<ContactSection
					message={ui?.contact.message}
					title={ui?.contact.title}
					video={ui?.contact.video}
				/>
				<Footer obj={ui?.footer} />
				{/* </LayoutTransition> */}
			</body>
		</html>
	);
}

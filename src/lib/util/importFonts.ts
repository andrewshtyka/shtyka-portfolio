import { IBM_Plex_Mono, Manrope, Source_Serif_4 } from "next/font/google";

export const fontSerif = Source_Serif_4({
	variable: "--font-serif",
	subsets: ["latin", "cyrillic"],
	weight: "400",
	style: ["normal", "italic"],
	display: "swap",
});

export const fontMono = IBM_Plex_Mono({
	variable: "--font-mono",
	subsets: ["latin", "cyrillic"],
	weight: "500",
	display: "swap",
});

export const fontDisplay = Manrope({
	variable: "--font-display",
	subsets: ["latin", "cyrillic"],
	weight: ["500", "600"],
	display: "swap",
});

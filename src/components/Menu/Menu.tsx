// components
import Image from "next/image";
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";

// sanity
import { urlFor } from "@/sanity/lib/image";

// types
import { Props } from "./Menu.types";
import Navigation from "./Navigation/Navigation";

export default function Menu({ lang, logo, menu, menuMobile }: Props) {
	if (!lang || !logo || !menu || !menuMobile) return;

	const srcLogo = urlFor(logo.svg)?.url() ?? "";

	const menuItems = menu.map((el) => {
		return {
			item: el,
			id: crypto.randomUUID(),
		};
	});

	return (
		<header>
			<Image
				src={srcLogo}
				alt={logo.alt}
				width="31"
				height="20"
				unoptimized={true}
			/>
			<Desktop>
				<Navigation menuItems={menuItems} />
			</Desktop>

			<Mobile menuMobile={menuMobile}>
				<Navigation menuItems={menuItems} />
			</Mobile>

			<LangSwitcher currentLang={lang} />
		</header>
	);
}

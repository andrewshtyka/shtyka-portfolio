// #region ============================== Imports

// components
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";
import Logo from "../Logo/Logo";

// styles
import css from "./Menu.module.css";

// types
import { Props } from "./Menu.types";
import Navigation from "./Navigation/Navigation";

// #endregion ===========================

export default function Menu({ lang, logo, menu, menuMobile }: Props) {
	if (!lang || !logo || !menu || !menuMobile) return;

	const menuItems = menu.map((el) => {
		return {
			item: el,
			id: crypto.randomUUID(),
		};
	});

	return (
		<header className={css.container}>
			<Logo logo={logo} />

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

// #region ============================== Imports

// components
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Divider from "./Divider/Divider";

// styles
import css from "./Menu.module.css";

// types
import { Props } from "./Menu.types";

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
			<div className={css.header}>
				<Logo logo={logo} />

				<Divider />

				<Desktop>
					<Navigation menuItems={menuItems} />
				</Desktop>

				<Divider isHiddenOnMobile={true} />

				{/* 
				TODO
				Make mob menu to have white bg - when 'Menu' is tapped
				 */}
				<Mobile menuMobile={menuMobile}>
					<Navigation menuItems={menuItems} />
					<Divider isHorizontal={true} />
					<LangSwitcher currentLang={lang} />
				</Mobile>

				<LangSwitcher currentLang={lang} isHiddenOnMobile={true} />
			</div>
		</header>
	);
}

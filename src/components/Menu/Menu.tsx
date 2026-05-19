"use client";

// #region ============================== Imports

// components
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Divider from "../Divider/Divider";

// hooks
import useMediaQueryListener from "@/hooks/useMediaQueryListener";

// styles
import css from "./Menu.module.css";

// types
import { Props } from "./Menu.types";

// utils
import React from "react";
// #endregion ===========================

export default function Menu({ lang, menu, menuMobile }: Props) {
	const [isMenuOpened, setIsMenuOpened] = React.useState(false);
	const menuItemId = React.useId();

	// close menu automatically on resize
	useMediaQueryListener(setIsMenuOpened);

	if (!lang || !menu || !menuMobile) return;

	function toggleMenuMobile() {
		setIsMenuOpened((currentIsMenuOpened) => !currentIsMenuOpened);
	}

	const menuOpenedStyles = {
		header: isMenuOpened
			? {
					backgroundColor: "var(--color-base)",
					border: "var(--space-px) solid var(--color-gray-alpha-subtle)",
				}
			: { backdropFilter: "blur(24px)" },
		logo: isMenuOpened ? "black" : "white",
		divider: isMenuOpened
			? { backgroundColor: "var(--color-gray-alpha-subtle)" }
			: {},
	};

	const menuItems = menu.map((el, i) => {
		return {
			item: el,
			id: `${menuItemId}-${i}`,
		};
	});

	return (
		<header className={css.container}>
			<div className={css.header} style={menuOpenedStyles.header}>
				<Logo isMenuOpened={isMenuOpened} />

				<Divider style={menuOpenedStyles.divider} />

				<Desktop>
					<Navigation menuItems={menuItems} />
				</Desktop>

				<Divider isHiddenOnMobile={true} />

				<Mobile
					open={menuMobile.open}
					close={menuMobile.close}
					isMenuOpened={isMenuOpened}
					onClick={toggleMenuMobile}
				>
					<Navigation menuItems={menuItems} />
					<Divider isHorizontal={true} />
					<LangSwitcher currentLang={lang} />
				</Mobile>

				<LangSwitcher currentLang={lang} isHiddenOnMobile={true} />
			</div>
		</header>
	);
}

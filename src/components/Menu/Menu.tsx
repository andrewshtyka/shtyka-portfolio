"use client";

// #region ============================== Imports

// components
import MenuHome from "./MenuHome/MenuHome";
import MenuNotHome from "./MenuNotHome/MenuNotHome";

// styles
import css from "./Menu.module.css";

// types
import { Props } from "./Menu.types";

// utils
import { usePathname } from "next/navigation";

// #endregion ===========================

export function Menu({ lang, menu, buttonHome, menuMobile }: Props) {
	const pathname = usePathname();
	const isHomePage = pathname === `/${lang}`;

	return (
		<header className={css.container}>
			{isHomePage ? (
				<MenuHome lang={lang} menu={menu} menuMobile={menuMobile} />
			) : (
				<MenuNotHome lang={lang} buttonHome={buttonHome} />
			)}
		</header>
	);
}

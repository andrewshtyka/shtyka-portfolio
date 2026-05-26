"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import MenuHome from "./MenuHome/MenuHome";
import MenuNotHome from "./MenuNotHome/MenuNotHome";

// constants
import { MENU_ANIMATION } from "@/constants/animation";

// hooks
import { usePathname } from "next/navigation";

// styles
import css from "./Menu.module.css";

// types
import { Props } from "./Menu.types";
import { useBlur } from "@/hooks/useBlur";

// #endregion ===========================

export default function Menu({ lang, menu, buttonHome, menuMobile }: Props) {
	const pathname = usePathname();
	const isHomePage = pathname === `/${lang}`;

	useBlur();

	return (
		<motion.header
			initial={MENU_ANIMATION.onLoadMenu.initial}
			animate={MENU_ANIMATION.onLoadMenu.animate}
			transition={MENU_ANIMATION.onLoadMenu.transition}
			className={css.container}
		>
			{isHomePage ? (
				<MenuHome lang={lang} menu={menu} menuMobile={menuMobile} />
			) : (
				<MenuNotHome lang={lang} buttonHome={buttonHome} />
			)}
		</motion.header>
	);
}

"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import Divider from "@/components/Divider/Divider";
import LogoMenu from "@/components/Menu/LogoMenu/LogoMenu";
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";
import { MenuLinkSecondary } from "@/components/MenuLink/MenuLink";

// styles
import css from "./MenuNotHome.module.css";

// types
import { Props } from "./MenuNotHome.types";
import { MENU_NOT_HOME_ANIMATION } from "@/constants/animation";

// #endregion ===========================

export default function MenuNotHome({ lang, buttonHome }: Props) {
	return (
		<motion.header
			className={css.container}
			initial={MENU_NOT_HOME_ANIMATION.onLoadMenu.initial}
			animate={MENU_NOT_HOME_ANIMATION.onLoadMenu.animate}
			transition={MENU_NOT_HOME_ANIMATION.onLoadMenu.transition}
		>
			<div className={css.header}>
				<span className={css.container_logo}>
					<LogoMenu />
				</span>
				<Divider />
				<nav className={css.nav}>
					<MenuLinkSecondary
						href={`/${lang}`}
						icon={<IconArrowCurve direction="left" />}
					>
						{buttonHome}
					</MenuLinkSecondary>
				</nav>
				<Divider />
				<LangSwitcher currentLang={lang} />
			</div>
		</motion.header>
	);
}

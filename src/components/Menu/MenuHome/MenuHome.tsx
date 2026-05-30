"use client";

// #region ============================== Imports

// animation
import { AnimatePresence, motion } from "motion/react";

// components
import Divider from "@/components/Divider/Divider";
import LogoMenu from "@/components/Menu/LogoMenu/LogoMenu";
import ContainerDesktop from "./ContainerDesktop/ContainerDesktop";
import ContainerMobile from "./ContainerMobile/ContainerMobile";
import Navigation from "./Navigation/Navigation";
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";

// hooks
import useMediaQueryListener from "@/hooks/useMediaQueryListener";

// styles
import css from "./MenuHome.module.css";

// types
import { Props } from "./MenuHome.types";

// constants
import { HOME_SECTIONS_ARR } from "@/constants/sectionNames";

// utility
import React from "react";
import { MENU_ANIMATION } from "@/constants/animation";

// #endregion ===========================

export default function MenuHome({ lang, menu, menuMobile }: Props) {
	const [isMenuOpened, setIsMenuOpened] = React.useState(false);
	const menuItemId = React.useId();

	// close menu automatically on resize
	useMediaQueryListener(setIsMenuOpened, 768);

	if (!lang || !Array.isArray(menu) || !menuMobile) return null;

	function toggleMenuMobile() {
		setIsMenuOpened((value) => !value);
	}

	const menuOpenedStyles = {
		header: isMenuOpened
			? {
					backgroundColor: "var(--color-base)",
					border: "var(--space-px) solid var(--color-border-dark)",
				}
			: { backdropFilter: "var(--blur)" },
		logo: isMenuOpened ? "black" : "white",
		divider: isMenuOpened
			? { backgroundColor: "var(--color-gray-alpha-s)" }
			: {},
	};

	const menuItems = menu.map((el, i) => {
		return {
			item: el,
			id: HOME_SECTIONS_ARR[i],
			key: `${menuItemId}-${i}`,
		};
	});

	return (
		<motion.header
			className={css.container}
			initial={MENU_ANIMATION.onLoadMenu.initial}
			animate={MENU_ANIMATION.onLoadMenu.animate}
			transition={MENU_ANIMATION.onLoadMenu.transition}
		>
			<div className={css.header} style={menuOpenedStyles.header}>
				<span className={css.container_logo}>
					<LogoMenu isMenuOpened={isMenuOpened} />
				</span>
				<Divider style={menuOpenedStyles?.divider} />
				<ContainerDesktop>
					<Navigation menuItems={menuItems} />
				</ContainerDesktop>
				<Divider isHiddenOnMobile={true} />
				<ContainerMobile
					open={menuMobile?.open}
					close={menuMobile?.close}
					isMenuOpened={isMenuOpened}
					onClick={toggleMenuMobile}
				>
					<Navigation menuItems={menuItems} onClick={toggleMenuMobile} />
					<Divider isHorizontal={true} />
					<LangSwitcher currentLang={lang} />
				</ContainerMobile>
				<LangSwitcher currentLang={lang} isHiddenOnMobile={true} />
			</div>
		</motion.header>
	);
}

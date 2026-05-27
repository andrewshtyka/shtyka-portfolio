"use client";

// #region ============================== Imports

// animation
import { AnimatePresence, motion } from "motion/react";

// components
import MenuButton from "@/components/MenuButton/MenuButton";

// styles
import css from "./ContainerMobile.module.css";

// types
import { Props } from "./ContainerMobile.types";

// utils
import React from "react";
import { MENU_ANIMATION } from "@/constants/animation";

// #endregion ===========================

export default function ContainerMobile({
	children,
	open,
	close,
	isMenuOpened,
	onClick = undefined,
}: Props) {
	const customClass = isMenuOpened ? "invert_colors" : " ";

	return (
		<div className={css.container}>
			<MenuButton onClick={onClick} customClass={customClass}>
				{isMenuOpened ? close : open}
			</MenuButton>

			<AnimatePresence mode="wait">
				{isMenuOpened && (
					<motion.span
						initial={MENU_ANIMATION.mobile.initial}
						animate={MENU_ANIMATION.mobile.animate}
						exit={MENU_ANIMATION.mobile.exit}
						transition={MENU_ANIMATION.mobile.transition}
						className={`${css.children} bg_blur`}
					>
						{children}
					</motion.span>
				)}
			</AnimatePresence>
		</div>
	);
}

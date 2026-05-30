"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import Link from "next/link";

// constants
import { MENU_ANIMATION } from "@/constants/animation";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";
import { useBlur } from "@/hooks/useBlur";
import { useIconHover } from "@/hooks/animation/useIconHover";

// styles
import css from "./MenuLink.module.css";

// types
import { PropsPrimary, PropsSecondary } from "./MenuLink.types";

// utlity
import React from "react";

// #endregion ===========================

/**
 * Used for:
 * - Links in menu, scroll to section (only on home page)
 */
export function MenuLinkPrimary({
	children = "",
	layoutId,
	isActive,
	onClick = undefined,
	isTransparent = false,
}: PropsPrimary) {
	const transparencyClass = isTransparent
		? `${css.transparent}`
		: `${css.solid}`;

	const classes = `${css.base} ${transparencyClass} f_display_buttons f_semibold `;

	const ref = React.useRef<HTMLButtonElement>(null);
	const { play } = useLinkHover(ref);

	useBlur();

	return (
		<li className={css.list_item} style={{ zIndex: isActive ? 1 : 2 }}>
			{isActive && (
				<motion.div
					layoutId={layoutId}
					className={css.button_hovered}
					initial={{
						borderRadius: "var(--border-radius-secondary)",
					}}
					transition={{ duration: MENU_ANIMATION.transition.duration }}
				></motion.div>
			)}
			<button
				type="button"
				className={classes}
				onClick={onClick}
				onMouseEnter={isActive ? undefined : play}
				onFocus={isActive ? undefined : play}
			>
				<span ref={ref} className={css.children}>
					{children}
				</span>
			</button>
		</li>
	);
}

/**
 * Used for:
 * - Langswitcher
 * - "Go home" link in menu (on NOT home page)
 */
export function MenuLinkSecondary({
	children = "",
	href,
	isTransparent = false,
	scroll = true,
	onClick = undefined,
	icon,
	direction = "left",
}: PropsSecondary) {
	const transparencyClass = isTransparent
		? `${css.transparent}`
		: `${css.solid}`;

	const classes = `${css.base} ${transparencyClass} `;

	const ref = React.useRef<HTMLAnchorElement>(null);
	const { play } = useLinkHover(ref);

	const refIcon = React.useRef<HTMLAnchorElement>(null);
	const refIconContainer = React.useRef<HTMLAnchorElement>(null);
	const { play: playIcon } = useIconHover(refIcon, refIconContainer, direction);

	useBlur();

	if (!href) return null;

	return (
		<Link
			href={href}
			className={`f_display_buttons f_semibold ${classes}`}
			scroll={scroll}
			onClick={onClick}
			onMouseEnter={() => {
				play?.();
				playIcon?.();
			}}
			onFocus={() => {
				play?.();
				playIcon?.();
			}}
		>
			{icon && (
				<motion.span className={css.master_container_icon}>
					<motion.span ref={refIconContainer} className={css.container_icon}>
						<motion.span ref={refIcon} className={css.icon}>
							{icon}
						</motion.span>
					</motion.span>
				</motion.span>
			)}

			<span ref={ref} className={css.children}>
				{children}
			</span>
		</Link>
	);
}

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

// styles
import css from "./MenuLink.module.css";

// types
import { PropsPrimary, PropsSecondary } from "./MenuLink.types";

// utlity
import React from "react";

// #endregion ===========================

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

	const classes = `${css.base} ${transparencyClass}  f_display_buttons f_semibold `;

	const ref = React.useRef<HTMLAnchorElement>(null);
	const { play } = useLinkHover(ref);

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
				onMouseEnter={play}
				onFocus={play}
			>
				<span ref={ref} className={css.children}>
					{children}
				</span>
			</button>
		</li>
	);
}

export function MenuLinkSecondary({
	children = "",
	href,
	isTransparent = false,
	scroll = true,
	onClick = undefined,
}: PropsSecondary) {
	const transparencyClass = isTransparent
		? `${css.transparent}`
		: `${css.solid}`;

	const classes = `${css.base} ${transparencyClass} `;

	const ref = React.useRef<HTMLAnchorElement>(null);
	const { play } = useLinkHover(ref);

	if (!href) return null;

	return (
		<Link
			href={href}
			className={`f_display_buttons f_semibold ${classes}`}
			scroll={scroll}
			onClick={onClick}
			onMouseEnter={play}
			onFocus={play}
		>
			<span ref={ref} className={css.children}>
				{children}
			</span>
		</Link>
	);
}

/**
 * ======================
 */

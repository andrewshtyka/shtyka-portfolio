"use client";

// #region ============================== Imports

// components
import IconArrowCurve from "../Icons/IconArrowCurve/IconArrowCurve";

// constants
import { LINK_ANIMATION_CSS } from "@/constants/animation";

// hooks

// styles
import css from "./LinkText.module.css";

// types
import { Props } from "./LinkText.types";

// utility
import React from "react";

// #endregion ===========================

export default function LinkText({
	href,
	children = "",
	hasIcon = true,
}: Props) {
	const styleTransition = {
		transitionTimingFunction: LINK_ANIMATION_CSS.ease,
		transitionDuration: LINK_ANIMATION_CSS.duration,
	};

	if (!href) {
		return <span>{children}</span>;
	}

	return (
		<a
			href={href}
			className={css.link}
			target="_blank"
			rel="noopener noreferrer"
			style={styleTransition}
		>
			<span>{children}</span>
			{hasIcon && (
				<span className={css.icon}>
					<IconArrowCurve color="accent" direction="right" size="0.7em" />
				</span>
			)}
		</a>
	);
}

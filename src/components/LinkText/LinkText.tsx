"use client";

// #region ============================== Imports

// components
import IconArrowCurve from "../Icons/IconArrowCurve/IconArrowCurve";

// constants
import { LINK_ANIMATION_CSS } from "@/constants/animation";

// hooks
import { useIconHover } from "@/hooks/animation/useIconHover";
import { useLinkHover } from "@/hooks/animation/useLinkHover";
import { useBlur } from "@/hooks/useBlur";

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

	const refIcon = React.useRef<HTMLAnchorElement>(null);
	const refIconContainer = React.useRef<HTMLAnchorElement>(null);
	const { play: playIcon } = useIconHover(refIcon, refIconContainer);

	const refText = React.useRef<HTMLButtonElement>(null);
	const { play } = useLinkHover(refText, false);

	useBlur();

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
			onMouseEnter={() => {
				play();
				playIcon();
			}}
			onFocus={() => {
				play();
				playIcon();
			}}
		>
			<span ref={refText}>{children}</span>
			{hasIcon && (
				<span ref={refIconContainer} className={css.container_icon}>
					<span ref={refIcon} className={css.icon}>
						<IconArrowCurve color="accent" direction="right" size="0.7em" />
					</span>
				</span>
			)}
		</a>
	);
}

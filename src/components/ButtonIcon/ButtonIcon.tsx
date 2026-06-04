"use client";

// animation
import { motion } from "motion/react";

// hooks
import { useIconHover } from "@/hooks/animation/useIconHover";
import { useBlur } from "@/hooks/useBlur";

// styles
import css from "./ButtonIcon.module.css";

// types
import { Props } from "./ButtonIcon.types";

// utility
import React from "react";
import Magnetic from "../Magnetic/Magnetic";

export default function ButtonIcon({
	children = "",
	onClick = undefined,
	direction = "top",
	isTransparent = false,
}: Props) {
	const refIcon = React.useRef<HTMLAnchorElement>(null);
	const refIconContainer = React.useRef<HTMLAnchorElement>(null);
	const { play: playIcon } = useIconHover(refIcon, refIconContainer, direction);

	useBlur();

	const styleTransparency = isTransparent
		? {
				backgroundColor: "var(--color-gray-alpha-transparent)",
			}
		: {
				backgroundColor: "var(--color-background-transparent-dark-xl)",
				backdropFilter: "var(--blur)",
			};

	return (
		<Magnetic>
			<motion.button
				className={`f_display_buttons ${css.button}`}
				style={styleTransparency}
				onMouseEnter={playIcon}
				onFocus={playIcon}
				onClick={onClick}
			>
				<motion.span className={css.master_container_icon}>
					<motion.span ref={refIconContainer} className={css.container_icon}>
						<motion.span ref={refIcon} className={css.icon}>
							{children}
						</motion.span>
					</motion.span>
				</motion.span>
			</motion.button>
		</Magnetic>
	);
}

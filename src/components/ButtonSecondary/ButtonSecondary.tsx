"use client";

// animation
import { motion } from "motion/react";

// hooks
import { useIconHover } from "@/hooks/animation/useIconHover";
import { useBlur } from "@/hooks/useBlur";
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// styles
import css from "./ButtonSecondary.module.css";

// types
import { Props } from "./ButtonSecondary.types";

// utility
import React from "react";
import Magnetic from "../Magnetic/Magnetic";

export default function ButtonSecondary({
	children = "",
	href,
	icon,
}: Props) {
	const refIcon = React.useRef<HTMLAnchorElement>(null);
	const refIconContainer = React.useRef<HTMLAnchorElement>(null);
	const { play: playIcon } = useIconHover(refIcon, refIconContainer);

	useBlur();

	/**
	 * animation
	 */

	const refText = React.useRef<HTMLAnchorElement>(null);
	const { play } = useLinkHover(refText);

	if (!href) return null;

	return (
		<Magnetic>
			<motion.a
				href={href}
				className={`f_display_buttons ${css.button}`}
				target="_blank"
				rel="noopener noreferrer"
				onMouseEnter={() => {
					play?.();
					playIcon?.();
				}}
				onFocus={() => {
					play?.();
					playIcon?.();
				}}
				whileHover={{
					width: "fit-content",
				}}
				whileFocus={{
					width: "fit-content",
				}}
			>
				<motion.span ref={refText} className={css.text}>
					{children}
				</motion.span>

				{icon && (
					<motion.span className={css.master_container_icon}>
						<motion.span ref={refIconContainer} className={css.container_icon}>
							<motion.span ref={refIcon} className={css.icon}>
								{icon}
							</motion.span>
						</motion.span>
					</motion.span>
				)}
			</motion.a>
		</Magnetic>
	);
}

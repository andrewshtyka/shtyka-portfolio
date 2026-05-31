"use client";

// #region ============================== Imports

// animation
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, hover } from "motion/react";

// components

// constants

// hooks
import useFollowCursor from "@/hooks/animation/useFollowCursor";

// providers / context
import { HoverLineContext } from "@/providers/HoverLineProvider/HoverLineProvider";

// styles
import css from "./HoverLineText.module.css";

// types
import { Props } from "./HoverLineText.types";

// utility
import React from "react";

// #endregion ===========================

export default function HoverLineText({
	refTarget,
	title,
	shape = "line",
	speed = 3,
}: Props) {
	// 1. context
	const { isVisibleHover, setIsVisibleHover } =
		React.useContext(HoverLineContext);

	// 2. config
	const ref = React.useRef<HTMLDivElement>(null);
	React.useEffect(() => {
		if (!refTarget) return;
		return hover(refTarget.current, () => {
			setIsVisibleHover(true);
			return () => setIsVisibleHover(false);
		});
	}, [refTarget, setIsVisibleHover]);
	useFollowCursor(ref, refTarget, shape);

	// 3. infinite scroll
	const refText = React.useRef<HTMLDivElement>(null);
	useGSAP(
		() => {
			const el = refText.current;

			const clone = el?.cloneNode(true) as HTMLElement;
			el?.parentElement!.appendChild(clone);

			gsap.fromTo(
				[el, clone],
				{ x: 0 },
				{
					x: "-100%",
					duration: speed,
					ease: "none",
					repeat: -1,
				}
			);
		},
		{ scope: refText }
	);

	const classesApplied = `${css.container}`;

	return (
		<span className={css.is_mob_hidden}>
			<motion.div
				ref={ref}
				className={classesApplied}
				initial={{
					clipPath: `inset(0% 100% 0% 0% round var(--border-radius-tetriary))`,
				}}
				animate={{
					clipPath: isVisibleHover
						? `inset(0% 0% 0% 0% round var(--border-radius-tetriary))`
						: `inset(0% 100% 0% 0% round var(--border-radius-tetriary))`,
				}}
				transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}
			>
				<div ref={refText} className={`${css.container_text} f_mono`}>
					{title}
				</div>
			</motion.div>
		</span>
	);
}

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
		if (!refTarget?.current) return;
		const el = refTarget.current;

		const handleMouseMove = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const isInteractive = !!target.closest("a, button");
			setIsVisibleHover(!isInteractive);
		};

		const handleMouseLeave = () => setIsVisibleHover(false);

		el.addEventListener("mousemove", handleMouseMove as EventListener);
		el.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			el.removeEventListener("mousemove", handleMouseMove as EventListener);
			el.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [refTarget, setIsVisibleHover]);

	useFollowCursor(ref, refTarget, shape);

	// 3. infinite scroll
	const refText = React.useRef<HTMLDivElement>(null);
	useGSAP(
		() => {
			const el = refText.current;
			if (!el) return;

			const parent = el.parentElement!;
			const clone = el.cloneNode(true) as HTMLElement;
			parent.appendChild(clone);

			const tween = gsap.fromTo(
				[el, clone],
				{ x: 0 },
				{
					x: "-100%",
					duration: speed,
					ease: "none",
					repeat: -1,
				}
			);

			return () => {
				tween.kill();
				if (clone.parentNode === parent) {
					parent.removeChild(clone);
				}
			};
		},
		{ scope: refText, dependencies: [speed] }
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

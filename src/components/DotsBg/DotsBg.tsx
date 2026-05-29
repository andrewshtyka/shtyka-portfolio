"use client";

// #region ============================== Imports

// animation
import { motion, useScroll, useTransform } from "motion/react";

// styles
import css from "./DotsBg.module.css";

// types
import { Props } from "./DotsBG.types";

// utility
import React from "react";

// #endregion ===========================

/**
 * Put component inside parent (parent must have "position: relative")
 */

export default function DotsBg({
	yPosition = 25,
	saturation = 40,
	offset = 400,
}: Props) {
	// parallax scroll
	const ref = React.useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const yValue = useTransform(
		scrollYProgress,
		[0, 1],
		[`-${offset}px`, `${offset}px`]
	);

	// custom position of dots
	const maskImage = `radial-gradient(75% 40% at 50% ${yPosition}%, var(--color-gray) 10%, transparent 90%)`;
	const backgroundImage = `radial-gradient(oklch(from var(--color-base) l c h / ${saturation}%) 0.5px, transparent 0.5px)`;

	return (
		<motion.div
			ref={ref}
			className={css.dots}
			style={{
				y: yValue,
				maskImage,
				backgroundImage,
			}}
		></motion.div>
	);
}

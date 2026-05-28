"use client";

// #region ============================== Imports

// animation
import { motion, useScroll, useTransform } from "motion/react";

// styles
import css from "./DotsBg.module.css";

// utility
import React from "react";

// #endregion ===========================

/**
 * Put component inside parent (parent must have "position: relative")
 */

export default function DotsBg() {
	const ref = React.useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const yValue = useTransform(scrollYProgress, [0, 1], ["-400px", "400px"]);

	return (
		<motion.div
			ref={ref}
			className={css.dots}
			style={{
				y: yValue,
			}}
		></motion.div>
	);
}

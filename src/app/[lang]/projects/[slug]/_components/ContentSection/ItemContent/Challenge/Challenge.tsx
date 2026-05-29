"use client";

// #region ============================== Imports

// animation
import { motion, useInView } from "motion/react";

// components
import IconAsterisk from "@/components/Icons/IconAsterisk/IconAsterisk";

// constants
import { SECTION_PROJECTS_ANIMATION } from "@/constants/animation";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// styles
import css from "./Challenge.module.css";

// types
import { Props } from "./Challenge.types";

// utility
import React from "react";
import { fixTypography } from "@/lib/util/fixTypography";

// #endregion ===========================

export default function Challenge({
	label,
	currentNum,
	totalNum,
	text,
}: Props) {
	const refTitle_1 = React.useRef<HTMLSpanElement>(null);
	const refTitle_2 = React.useRef<HTMLSpanElement>(null);

	const isTitle_1_InView = useInView(refTitle_1, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const isTitle_2_InView = useInView(refTitle_2, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});

	const { play: playTitle_1 } = useLinkHover(refTitle_1);
	const { play: playTitle_2 } = useLinkHover(refTitle_2);

	React.useEffect(() => {
		if (isTitle_1_InView) playTitle_1?.();
	}, [isTitle_1_InView, playTitle_1]);

	React.useEffect(() => {
		if (isTitle_2_InView) playTitle_2?.();
	}, [isTitle_2_InView, playTitle_2]);

	return (
		<article className={css.container}>
			{/* top */}
			<div className={`${css.grid} ${css.top}`}>
				<motion.span
					ref={refTitle_1}
					className={`f_mono`}
					variants={SECTION_PROJECTS_ANIMATION.title}
					initial="initial"
					whileInView="animate"
					viewport={SECTION_PROJECTS_ANIMATION.title.viewport}
				>
					{label}
				</motion.span>
				<motion.span
					ref={refTitle_2}
					className={`${css.nums} f_mono`}
					variants={SECTION_PROJECTS_ANIMATION.title}
					initial="initial"
					whileInView="animate"
					viewport={SECTION_PROJECTS_ANIMATION.title.viewport}
				>
					{currentNum} / {totalNum}
				</motion.span>
			</div>

			{/* bottom */}
			<motion.div
				className={`${css.grid}`}
				variants={SECTION_PROJECTS_ANIMATION.project.listItem}
				initial="hidden"
				whileInView="visible"
				viewport={SECTION_PROJECTS_ANIMATION.project.listItem.viewport}
			>
				<div className={css.container_icon}>
					<IconAsterisk size={8} color="gray" />
					<IconAsterisk size={8} color="gray" />
				</div>

				<p className={`${css.text} f_display_body`}>{fixTypography(text)}</p>
			</motion.div>
		</article>
	);
}

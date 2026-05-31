"use client";

// #region ============================== Imports

// animation
import { motion, useInView } from "motion/react";

// components
import Row from "./Row/Row";

// contants
import { SECTION_EXPERIENCE_ANIMATION } from "@/constants/animation";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// styles
import css from "./ExperienceSection.module.css";

// types
import { RowProps } from "./Row/Row.types";
import { Props } from "./ExperienceSection.types";

// utility
import React from "react";

// #endregion ===========================

export default function ExperienceSection({ uiString }: Props) {
	const refTitle = React.useRef<HTMLHeadingElement>(null);
	const isTitleInView = useInView(refTitle, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const { play } = useLinkHover(refTitle);
	React.useEffect(() => {
		if (isTitleInView) play?.();
	}, [isTitleInView, play]);

	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);

	return (
		<section className={`${css.container} white_selection`}>
			<motion.h2
				ref={refTitle}
				className={`${css.title} f_serif_secondary`}
				variants={SECTION_EXPERIENCE_ANIMATION.title}
				initial="initial"
				whileInView="animate"
				viewport={SECTION_EXPERIENCE_ANIMATION.title.viewport}
			>
				{ui?.title}
			</motion.h2>

			<div>
				{/* head */}
				<div className={`${css.grid} ${css.head}`}>
					<motion.span
						className={`${css.table_head_item} f_mono`}
						variants={SECTION_EXPERIENCE_ANIMATION.line}
						initial="initial"
						whileInView="animate"
						transition={{
							...SECTION_EXPERIENCE_ANIMATION.line.transition,
							delay: SECTION_EXPERIENCE_ANIMATION.line.transition.delay(0),
						}}
						viewport={SECTION_EXPERIENCE_ANIMATION.line.viewport}
					>
						{ui?.header?.col1}
					</motion.span>
					<motion.span
						className={`${css.table_head_item} f_mono`}
						variants={SECTION_EXPERIENCE_ANIMATION.line}
						initial="initial"
						whileInView="animate"
						transition={{
							...SECTION_EXPERIENCE_ANIMATION.line.transition,
							delay: SECTION_EXPERIENCE_ANIMATION.line.transition.delay(0.1),
						}}
						viewport={SECTION_EXPERIENCE_ANIMATION.line.viewport}
					>
						{ui?.header?.col2}
					</motion.span>
				</div>

				{/* body */}
				{ui?.table?.map(
					({ _key, years, duration, role, company }: RowProps, i: number) => (
						<Row
							key={_key}
							years={years}
							duration={duration}
							role={role}
							company={company}
							num={i}
						/>
					)
				)}
			</div>
		</section>
	);
}

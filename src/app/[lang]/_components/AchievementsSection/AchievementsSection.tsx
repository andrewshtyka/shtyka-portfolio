"use client";

// #region ============================== Imports

// animate
import { motion, useInView } from "motion/react";

// components
import Row from "./Row/Row";

// constants
import { SECTION_ACHIEVEMENTS_ANIMATION } from "@/constants/animation";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// styles
import css from "./AchievementsSection.module.css";

// types
import { Props } from "./AchievementsSection.types";
import { RowProps } from "./Row/Row.types";

// utility
import React from "react";

// #endregion ===========================

export default function AchievementsSection({ uiString }: Props) {
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
		<section className={css.container}>
			<motion.h2
				ref={refTitle}
				className={`${css.title} f_serif_secondary`}
				variants={SECTION_ACHIEVEMENTS_ANIMATION.title}
				initial="initial"
				whileInView="animate"
				viewport={SECTION_ACHIEVEMENTS_ANIMATION.title.viewport}
			>
				{ui?.title}
			</motion.h2>
			<div>
				{ui?.table?.map(({ _key, achievement }: RowProps, i: number) => (
					<Row
						key={_key}
						achievement={JSON.stringify(achievement)}
						num={i + 1}
					/>
				))}
			</div>
		</section>
	);
}

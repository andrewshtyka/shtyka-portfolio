"use client";

// #region ============================== Imports

// animation
import { motion, useInView } from "motion/react";

// components
import ButtonSecondary from "@/components/ButtonSecondary/ButtonSecondary";
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";
import MediaComponent from "../MediaComponent/MediaComponent";

// constants
import { SECTION_EXPERIMENTS_ANIMATION } from "@/constants/animation";

// styles
import css from "./Card.module.css";

// types
import { Props } from "./Card.types";

// utility
import { getStyles } from "./lib/helpers/getStyles";

// utility
import React from "react";
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// #endregion ===========================

export default function Card({ data }: Props) {
	// animation - titles
	const refTitle = React.useRef<HTMLHeadingElement>(null);
	const refSubtitle = React.useRef<HTMLHeadingElement>(null);

	const isTitleInView = useInView(refTitle, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const isSubtitleInView = useInView(refSubtitle, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});

	const { play: playTitle } = useLinkHover(refTitle, true, 1);
	const { play: playSubtitle } = useLinkHover(refSubtitle, true, 2);

	React.useEffect(() => {
		if (isTitleInView) playTitle?.();
	}, [isTitleInView, playTitle]);

	React.useEffect(() => {
		if (isSubtitleInView) playSubtitle?.();
	}, [isSubtitleInView, playSubtitle]);

	if (!data) return null;

	return (
		<motion.li
			className={css.article}
			style={getStyles(data?.cardWidth)}
			variants={SECTION_EXPERIMENTS_ANIMATION.listItem}
			viewport={SECTION_EXPERIMENTS_ANIMATION.listItem.viewport}
		>
			{/* media */}
			<div className={css.container_media}>
				<MediaComponent uiString={JSON.stringify(data?.media[0])} />
			</div>

			{/* top */}
			<div className={css.top}>
				{data?.link && (
					<ButtonSecondary
						href={data?.link?.link}
						icon={<IconArrowCurve direction="right" size={10} />}
					>
						{data?.link?.title}
					</ButtonSecondary>
				)}
			</div>

			{/* bottom */}
			<div>
				<motion.h3
					ref={refTitle}
					className={`${css.title} f_display_body`}
					variants={SECTION_EXPERIMENTS_ANIMATION.experiment.title}
					initial="initial"
					whileInView="animate"
					transition={SECTION_EXPERIMENTS_ANIMATION.experiment.title.transition}
					viewport={SECTION_EXPERIMENTS_ANIMATION.experiment.title.viewport}
				>
					{data?.content?.title ?? ""}
				</motion.h3>
				<motion.p
					ref={refSubtitle}
					className={`${css.subtitle} f_mono`}
					variants={SECTION_EXPERIMENTS_ANIMATION.experiment.title}
					initial="initial"
					whileInView="animate"
					transition={SECTION_EXPERIMENTS_ANIMATION.experiment.title.transition}
					viewport={SECTION_EXPERIMENTS_ANIMATION.experiment.title.viewport}
				>
					{data?.content?.description ?? ""}
				</motion.p>
			</div>
		</motion.li>
	);
}

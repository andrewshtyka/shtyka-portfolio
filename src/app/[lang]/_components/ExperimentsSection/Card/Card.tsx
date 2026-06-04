"use client";

// #region ============================== Imports

// animation
import { motion, useInView } from "motion/react";

// components
import MediaComponent from "@/components/MediaComponent/MediaComponent";
import Magnetic from "@/components/Magnetic/Magnetic";
import HoverBar from "@/components/HoverBar/HoverBar";

// constants
import { SECTION_EXPERIMENTS_ANIMATION } from "@/constants/animation";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// styles
import css from "./Card.module.css";

// types
import { Props } from "./Card.types";

// utility
import { getStylesExperiments } from "@/lib/util/getStyles";

// utility
import React from "react";
import ButtonIcon from "@/components/ButtonIcon/ButtonIcon";
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";

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

	// animation - button on hover
	const refTarget = React.useRef<HTMLAnchorElement | null>(null);

	if (!data) return null;

	// image
	if (!data?.link) {
		return (
			<Magnetic yPower={0.1}>
				<motion.li
					className={css.article}
					style={getStylesExperiments(data?.media[0]?.cardWidth)}
					variants={SECTION_EXPERIMENTS_ANIMATION.listItem}
					viewport={SECTION_EXPERIMENTS_ANIMATION.listItem.viewport}
				>
					<span>
						<div className={css.container_media}>
							<MediaComponent uiString={JSON.stringify(data?.media[0])} />
						</div>
					</span>

					<div>
						<motion.h3
							ref={refTitle}
							className={`${css.title} f_display_body`}
							variants={SECTION_EXPERIMENTS_ANIMATION.experiment.title}
							initial="initial"
							whileInView="animate"
							transition={
								SECTION_EXPERIMENTS_ANIMATION.experiment.title.transition
							}
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
							transition={
								SECTION_EXPERIMENTS_ANIMATION.experiment.title.transition
							}
							viewport={SECTION_EXPERIMENTS_ANIMATION.experiment.title.viewport}
						>
							{data?.content?.description ?? ""}
						</motion.p>
					</div>
				</motion.li>
			</Magnetic>
		);
	}

	// video
	return (
		<Magnetic yPower={0.1}>
			<motion.li
				className={css.article}
				style={getStylesExperiments(data?.media[0]?.cardWidth)}
				variants={SECTION_EXPERIMENTS_ANIMATION.listItem}
				viewport={SECTION_EXPERIMENTS_ANIMATION.listItem.viewport}
			>
				<a ref={refTarget} href={data?.link?.link} className={css.link}>
					<div className={css.container_media}>
						<MediaComponent uiString={JSON.stringify(data?.media[0])} />
					</div>

					<HoverBar
						refTarget={refTarget}
						title={data?.link?.title}
						from="center"
						shape="circle"
					/>

					<div></div>
					<div className={css.container_text}>
						<motion.h3
							ref={refTitle}
							className={`${css.title} f_display_body`}
							variants={SECTION_EXPERIMENTS_ANIMATION.experiment.title}
							initial="initial"
							whileInView="animate"
							transition={
								SECTION_EXPERIMENTS_ANIMATION.experiment.title.transition
							}
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
							transition={
								SECTION_EXPERIMENTS_ANIMATION.experiment.title.transition
							}
							viewport={SECTION_EXPERIMENTS_ANIMATION.experiment.title.viewport}
						>
							{data?.content?.description ?? ""}
						</motion.p>
					</div>

					<div className={css.mobile_icon}>
						<IconArrowCurve direction="right" />
					</div>
				</a>
			</motion.li>
		</Magnetic>
	);
}

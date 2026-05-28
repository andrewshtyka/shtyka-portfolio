"use client";

// #region ============================== Imports

// animation
import { motion, useInView } from "motion/react";

// components
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";
import Divider from "@/components/Divider/Divider";
import ListItem from "@/components/ListItem/ListItem";
import VideoProject from "@/components/VideoProject/VideoProject";
import IconArrowShortCut from "@/components/Icons/IconArrowShortCut/IconArrowShortCut";
import DotsBg from "@/components/DotsBg/DotsBg";

// constants
import {
	PROJECT_INTRO_ANIMATION,
	SECTION_PROJECTS_ANIMATION,
} from "@/constants/animation";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// styles
import css from "./IntroSection.module.css";

// types
import { Props } from "./IntroSection.types";

// utility
import React from "react";
import processDetailsData from "@/app/[lang]/_components/ProjectsSection/Card/lib/helpers/processDetailsData";

// #endregion ===========================

export default function IntroSection({ uiString }: Props) {
	// #region ============================== Animation titles
	const refHeading = React.useRef<HTMLHeadingElement>(null);
	const refTitle = React.useRef<HTMLHeadingElement>(null);
	const refTitleCol_1 = React.useRef<HTMLHeadingElement>(null);
	const refTitleCol_2 = React.useRef<HTMLHeadingElement>(null);
	const refTitleCol_3 = React.useRef<HTMLHeadingElement>(null);

	const isTitleInView = useInView(refTitle, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const isTitleCol_1_InView = useInView(refTitleCol_1, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const isTitleCol_2_InView = useInView(refTitleCol_2, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const isTitleCol_3_InView = useInView(refTitleCol_3, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});

	const { play: playHeading } = useLinkHover(refHeading);
	const { play: playTitle } = useLinkHover(refTitle);
	const { play: playTitleCol_1 } = useLinkHover(refTitleCol_1);
	const { play: playTitleCol_2 } = useLinkHover(refTitleCol_2);
	const { play: playTitleCol_3 } = useLinkHover(refTitleCol_3);

	React.useEffect(() => {
		if (isTitleInView) playTitle?.();
	}, [isTitleInView, playTitle]);

	React.useEffect(() => {
		if (isTitleCol_1_InView) playTitleCol_1?.();
	}, [isTitleCol_1_InView, playTitleCol_1]);

	React.useEffect(() => {
		if (isTitleCol_2_InView) playTitleCol_2?.();
	}, [isTitleCol_2_InView, playTitleCol_2]);

	React.useEffect(() => {
		if (isTitleCol_3_InView) playTitleCol_3?.();
	}, [isTitleCol_3_InView, playTitleCol_3]);

	// #endregion ===========================

	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);

	const details_1 = processDetailsData(ui?.details[0]?.content);
	const details_2 = processDetailsData(ui?.details[1]?.content);
	const details_3 = processDetailsData(ui?.details[2]?.content);

	return (
		<section className={css.container}>
			{/* dots */}
			<DotsBg />

			{/* text */}
			<div className={css.content}>
				<motion.h1
					variants={PROJECT_INTRO_ANIMATION.heading}
					initial="initial"
					animate="animate"
					onAnimationComplete={playHeading}
					ref={refHeading}
					className={`f_serif_primary ${css.h1}`}
				>
					{ui?.title}
				</motion.h1>

				{/* top */}
				<div className={css.container_description}>
					{/* description & icons */}
					<div className={css.grid}>
						<span className={css.container_icon}>
							<IconArrowShortCut size={5} direction="up" color="gray" />
							<IconArrowShortCut size={5} direction="up" color="gray" />
						</span>
						<motion.p
							className={`${css.description} f_display_buttons`}
							variants={PROJECT_INTRO_ANIMATION.description}
							initial="initial"
							animate="animate"
						>
							{ui?.description}
						</motion.p>
					</div>

					{/* button */}
					<motion.div
						className={css.container_button}
						variants={PROJECT_INTRO_ANIMATION.description}
						initial="initial"
						animate="animate"
					>
						<ButtonPrimary
							href={ui?.link?.href}
							icon={<IconArrowCurve color="black" direction="right" />}
						>
							{ui?.link?.label}
						</ButtonPrimary>
					</motion.div>
				</div>

				{/* divider */}
				<motion.div
					variants={PROJECT_INTRO_ANIMATION.divider}
					initial="initial"
					animate="animate"
				>
					<Divider isHorizontal={true} willHide={false} />
				</motion.div>

				{/* bottom */}
				<div className={css.bottom}>
					{/* col 1 */}
					<motion.div className={`${css.part_1} ${css.grid}`}>
						<motion.h5
							ref={refTitleCol_1}
							className={`${css.column_title} f_mono`}
							variants={SECTION_PROJECTS_ANIMATION.title}
							initial="initial"
							whileInView="animate"
							viewport={SECTION_PROJECTS_ANIMATION.title.viewport}
						>
							{details_1?.title}
						</motion.h5>
						<motion.ul
							className={css.list}
							variants={SECTION_PROJECTS_ANIMATION.project.list}
							initial="hidden"
							whileInView="visible"
							viewport={SECTION_PROJECTS_ANIMATION.project.list.viewport}
						>
							{details_1?.items?.map(({ key, item }) => (
								<ListItem
									key={key}
									variants={SECTION_PROJECTS_ANIMATION.project.listItem}
									viewport={
										SECTION_PROJECTS_ANIMATION.project.listItem.viewport
									}
								>
									{item}
								</ListItem>
							))}
						</motion.ul>
					</motion.div>

					{/* col 2 */}
					<motion.div className={`${css.part_2} ${css.grid}`}>
						<motion.h5
							ref={refTitleCol_2}
							className={`${css.column_title} f_mono`}
							variants={SECTION_PROJECTS_ANIMATION.title}
							initial="initial"
							whileInView="animate"
							viewport={SECTION_PROJECTS_ANIMATION.title.viewport}
						>
							{details_2?.title}
						</motion.h5>
						<motion.ul
							className={css.list}
							variants={SECTION_PROJECTS_ANIMATION.project.list}
							initial="hidden"
							whileInView="visible"
							viewport={SECTION_PROJECTS_ANIMATION.project.list.viewport}
						>
							{details_2?.items?.map(({ key, item }) => (
								<ListItem
									key={key}
									variants={SECTION_PROJECTS_ANIMATION.project.listItem}
									viewport={
										SECTION_PROJECTS_ANIMATION.project.listItem.viewport
									}
								>
									{item}
								</ListItem>
							))}
						</motion.ul>
					</motion.div>

					{/* col 3 */}
					<motion.div className={`${css.part_3} ${css.right} ${css.grid}`}>
						<motion.h5 className={`${css.column_title} f_mono`}>
							<motion.span
								ref={refTitleCol_3}
								variants={SECTION_PROJECTS_ANIMATION.title}
								initial="initial"
								whileInView="animate"
								viewport={SECTION_PROJECTS_ANIMATION.title.viewport}
							>
								{details_3?.title}
							</motion.span>
						</motion.h5>
						<motion.ul
							className={css.list}
							variants={SECTION_PROJECTS_ANIMATION.project.list}
							initial="hidden"
							whileInView="visible"
							viewport={SECTION_PROJECTS_ANIMATION.project.list.viewport}
						>
							{details_3?.items?.map(({ key, item }) => (
								<ListItem
									key={key}
									variants={SECTION_PROJECTS_ANIMATION.project.listItem}
									viewport={
										SECTION_PROJECTS_ANIMATION.project.listItem.viewport
									}
								>
									{item}
								</ListItem>
							))}
						</motion.ul>
					</motion.div>
				</div>
			</div>

			{/* video */}
			<motion.div
				className={css.container_video}
				variants={PROJECT_INTRO_ANIMATION.video}
				initial="hide"
				whileInView="show"
				transition={PROJECT_INTRO_ANIMATION.video.transition}
			>
				<VideoProject video={ui?.video?.video} poster={ui?.video?.poster} />
			</motion.div>
		</section>
	);
}

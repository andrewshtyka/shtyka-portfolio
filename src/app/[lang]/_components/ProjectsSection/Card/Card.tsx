"use client";

// #region ============================== Imports

// animation
import { motion, useInView } from "motion/react";

// components
import VideoProject from "@/components/VideoProject/VideoProject";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";
import Divider from "@/components/Divider/Divider";
import ListItem from "@/components/ListItem/ListItem";
import IconArrowShortCut from "@/components/Icons/IconArrowShortCut/IconArrowShortCut";

// constants
import { SECTION_PROJECTS_ANIMATION } from "@/constants/animation";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// styles
import css from "./Card.module.css";

// types
import { Props } from "./Card.types";

// utils
import processDetailsData from "./lib/helpers/processDetailsData";
import { useParams } from "next/navigation";
import React from "react";

// #endregion ===========================

export default function Card({ uiString, buttonTitle = "" }: Props) {
	// animation - titles
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

	const params = useParams<{ lang: string }>();
	const lang = params?.lang ?? "en";

	const ui = JSON.parse(uiString);

	const details_1 = processDetailsData(ui?.details[0]?.content);
	const details_2 = processDetailsData(ui?.details[1]?.content);
	const details_3 = processDetailsData(ui?.details[2]?.content);

	return (
		<li className={css.container}>
			{/* video */}
			<div className={css.container_video}>
				<VideoProject
					video={ui?.heroVideo?.video}
					poster={ui?.heroVideo?.poster}
				/>
			</div>

			{/* details */}
			<div className={css.container_details}>
				{/* title */}
				<div className={css.top}>
					<motion.h3
						ref={refTitle}
						className={`${css.title} f_serif_primary`}
						variants={SECTION_PROJECTS_ANIMATION.title}
						initial="initial"
						whileInView="animate"
						viewport={SECTION_PROJECTS_ANIMATION.title.viewport}
					>
						{ui?.title}
					</motion.h3>

					<span className={css.grid}>
						{/* icons */}
						<span className={css.container_icon}>
							<IconArrowShortCut size={5} direction="up" color="gray" />
							<IconArrowShortCut size={5} direction="up" color="gray" />
						</span>

						{/* description */}
						<motion.h4
							className={`${css.subtitle} f_display_buttons`}
							variants={SECTION_PROJECTS_ANIMATION.project.description}
							initial="initial"
							whileInView="animate"
							transition={
								SECTION_PROJECTS_ANIMATION.project.description.transition
							}
							viewport={SECTION_PROJECTS_ANIMATION.project.description.viewport}
						>
							{ui?.about?.description}
						</motion.h4>
					</span>
				</div>

				{/* divider */}
				<motion.div
					variants={SECTION_PROJECTS_ANIMATION.project.divider}
					initial="initial"
					whileInView="animate"
					transition={SECTION_PROJECTS_ANIMATION.project.divider.transition}
					viewport={SECTION_PROJECTS_ANIMATION.project.divider.viewport}
				>
					<Divider isHorizontal={true} willHide={false} />
				</motion.div>

				{/* details */}
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

				{/* button */}
				<motion.div
					variants={SECTION_PROJECTS_ANIMATION.project.button}
					initial="hidden"
					whileInView="visible"
					viewport={SECTION_PROJECTS_ANIMATION.project.button.viewport}
				>
					<ButtonPrimary
						href={`/${lang}/projects/${ui?.slug?.current}`}
						icon={<IconArrowCurve color="black" direction="right" />}
						isExternal={false}
					>
						{buttonTitle}
					</ButtonPrimary>
				</motion.div>
			</div>
		</li>
	);
}

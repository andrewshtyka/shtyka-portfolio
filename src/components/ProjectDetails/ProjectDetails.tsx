"use client";

// #region ============================== Imports

// animation
import { motion, useInView } from "motion/react";

// components
import ListItem from "../ListItem/ListItem";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// styles
import css from "./ProjectDetails.module.css";

// types
import { Props } from "./ProjectDetails.types";

// utility
import React from "react";
import { SECTION_PROJECTS_ANIMATION } from "@/constants/animation";
import processDetailsData from "@/app/[lang]/_components/ProjectsSection/Card/lib/helpers/processDetailsData";

// #endregion ===========================

export default function ProjectDetails({
	uiString,
	offset = "small",
	delay = 0,
}: Props) {
	// #region ============================== Animation titles

	const refTitleCol_1 = React.useRef<HTMLHeadingElement>(null);
	const refTitleCol_2 = React.useRef<HTMLHeadingElement>(null);
	const refTitleCol_3 = React.useRef<HTMLHeadingElement>(null);

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

	const { play: playTitleCol_1 } = useLinkHover(refTitleCol_1);
	const { play: playTitleCol_2 } = useLinkHover(refTitleCol_2);
	const { play: playTitleCol_3 } = useLinkHover(refTitleCol_3);

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

	let appliedClass;
	if (offset === "small") appliedClass = `${css.bottom_small}`;
	else if (offset === "large") appliedClass = `${css.bottom_large}`;

	return (
		<div className={appliedClass}>
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
							viewport={SECTION_PROJECTS_ANIMATION.project.listItem.viewport}
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
							viewport={SECTION_PROJECTS_ANIMATION.project.listItem.viewport}
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
							viewport={SECTION_PROJECTS_ANIMATION.project.listItem.viewport}
						>
							{item}
						</ListItem>
					))}
				</motion.ul>
			</motion.div>
		</div>
	);
}

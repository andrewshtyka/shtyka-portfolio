"use client";

// #region ============================== Imports

// animation
import { motion, useInView, useScroll, useTransform } from "motion/react";

// components
import IconArrowShortCut from "@/components/Icons/IconArrowShortCut/IconArrowShortCut";
import Card from "./Card/Card";

// constants
import { HOME_SECTIONS } from "@/constants/sectionNames";
import { SECTION_PROJECTS_ANIMATION } from "@/constants/animation";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// styles
import css from "./ProjectsSection.module.css";

// types
import { ProjectHome, Props } from "./ProjectsSection.types";

// utility
import React from "react";

// #endregion ===========================

export default function ProjectsSection({ uiString, projectsString }: Props) {
	// animation - icons
	const refContainer = React.useRef<HTMLElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: refContainer,
		offset: ["start end", "10% 90%"],
	});

	const xValue = useTransform(scrollYProgress, [0, 1], ["24px", "0px"]);
	const negativeX = useTransform(xValue, (val: string) => {
		const num = parseFloat(val);
		return `${-num}px`;
	});

	// animation - title
	const refTitle_1 = React.useRef<HTMLHeadingElement>(null);
	const refTitle_2 = React.useRef<HTMLHeadingElement>(null);
	const isTitle_1_InView = useInView(refTitle_1, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const isTitle_2_InView = useInView(refTitle_2, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const { play: playTitle_1 } = useLinkHover(refTitle_1);
	const { play: playTitle_2 } = useLinkHover(refTitle_2, true, 2);

	React.useEffect(() => {
		if (isTitle_1_InView) playTitle_1?.();
	}, [isTitle_1_InView, playTitle_1]);

	React.useEffect(() => {
		if (isTitle_2_InView) playTitle_2?.();
	}, [isTitle_2_InView, playTitle_2]);

	if (!projectsString || typeof projectsString !== "string") return;
	if (!uiString || typeof uiString !== "string") return;

	const [ui, buttonTitle] = JSON.parse(uiString);

	const projects = JSON.parse(projectsString);

	const dataTitle = {
		title_1: ui[0]?.children[0]?.text ?? "",
		title_2: ui[1]?.children[0]?.text ?? "",
	};

	const dataProjects = projects?.map((project: ProjectHome) => {
		return {
			data: { ...project },
			key: project?._id,
		};
	});

	return (
		<section
			ref={refContainer}
			id={HOME_SECTIONS.projects}
			className={css.container}
		>
			{/* title */}
			<div className={css.container_title}>
				{/* icons */}
				<span className={css.icons}>
					<motion.span
						style={{
							x: negativeX,
						}}
					>
						<IconArrowShortCut direction="up" />
					</motion.span>
					<motion.span
						style={{
							x: xValue,
						}}
					>
						<IconArrowShortCut direction="up" />
					</motion.span>
				</span>

				{/* text */}
				<h2 className={css.h2}>
					<motion.span
						ref={refTitle_1}
						className={`${css.title_1} f_serif_primary`}
						variants={SECTION_PROJECTS_ANIMATION.title}
						initial="initial"
						whileInView="animate"
						viewport={SECTION_PROJECTS_ANIMATION.title.viewport}
					>
						{dataTitle?.title_1}
					</motion.span>
					<motion.span
						ref={refTitle_2}
						className="f_serif_primary f_italic"
						variants={SECTION_PROJECTS_ANIMATION.title}
						initial="initial"
						whileInView="animate"
						viewport={SECTION_PROJECTS_ANIMATION.title.viewport}
					>
						{dataTitle?.title_2}
					</motion.span>
				</h2>
			</div>

			{/* projects */}
			<ul className={css.list}>
				{dataProjects.map(({ key, data }: { key: string; data: string }) => (
					<Card
						key={key}
						uiString={JSON.stringify(data)}
						buttonTitle={buttonTitle}
					/>
				))}
			</ul>
		</section>
	);
}

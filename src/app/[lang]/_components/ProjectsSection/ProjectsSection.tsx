"use client";

// #region ============================== Imports

// animation
import { motion, useScroll, useTransform } from "motion/react";

// components
import IconArrowShortCut from "@/components/Icons/IconArrowShortCut/IconArrowShortCut";
import Card from "./Card/Card";

// constants
import { HOME_SECTIONS } from "@/constants/sectionNames";

// styles
import css from "./ProjectsSection.module.css";

// types
import { ProjectHome, Props } from "./ProjectsSection.types";

// utility
import React from "react";

// #endregion ===========================

export default function ProjectsSection({ uiString, projectsString }: Props) {
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
				<h2>
					<span className={`${css.title_1} f_serif_primary`}>
						{dataTitle?.title_1}
					</span>
					<span className="f_serif_primary f_italic">{dataTitle?.title_2}</span>
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


// ЗРОБИ ЗАГОЛОВКИ ПОЯВУ
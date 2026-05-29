"use client";

// #region ============================== Imports

// animation
import { motion, useInView, useScroll, useTransform } from "motion/react";

// components
import ItemContent from "./ItemContent/ItemContent";
import IconAsterisk from "@/components/Icons/IconAsterisk/IconAsterisk";

// constants
import { SECTION_PROJECTS_ANIMATION } from "@/constants/animation";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// providers / context
import { ProjectInViewContext } from "@/providers/ProjectInViewProvider/ProjectInViewProvider";

// styles
import css from "./ContentSection.module.css";

// types
import { Props } from "./ContentSection.types";
import { PropsContent } from "./ContentSection.types";

// utility
import React from "react";

// #endregion ===========================

export default function ContentSection({
	uiContentString,
	uiEndString,
}: Props) {
	// show / hide button "up"
	const { setIsInView } = React.useContext(ProjectInViewContext);
	const containerRef = React.useRef(null);
	const isContainerInView = useInView(containerRef);
	React.useEffect(() => {
		setIsInView(isContainerInView);
	}, [setIsInView, isContainerInView]);

	// animation - icons move on scroll
	const refContainer = React.useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: refContainer,
		offset: ["start end", "end 60%"],
	});
	const xValue = useTransform(scrollYProgress, [0, 1], ["64px", "0px"]);
	const negativeX = useTransform(xValue, (val: string) => {
		const num = parseFloat(val);
		return `${-num}px`;
	});

	// #region ============================== animation - title
	const refTitle_1 = React.useRef<HTMLHeadingElement>(null);
	const refTitle_2 = React.useRef<HTMLHeadingElement>(null);
	const refTitle_3 = React.useRef<HTMLHeadingElement>(null);
	const isTitle_1_InView = useInView(refTitle_1, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const isTitle_2_InView = useInView(refTitle_2, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const isTitle_3_InView = useInView(refTitle_3, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const { play: playTitle_1 } = useLinkHover(refTitle_1);
	const { play: playTitle_2 } = useLinkHover(refTitle_2, false, 1);
	const { play: playTitle_3 } = useLinkHover(refTitle_3, true, 2);

	React.useEffect(() => {
		if (isTitle_1_InView) playTitle_1?.();
	}, [isTitle_1_InView, playTitle_1]);

	React.useEffect(() => {
		if (isTitle_2_InView) playTitle_2?.();
	}, [isTitle_2_InView, playTitle_2]);

	React.useEffect(() => {
		if (isTitle_3_InView) playTitle_3?.();
	}, [isTitle_3_InView, playTitle_3]);
	// #endregion ===========================

	if (!uiContentString || typeof uiContentString !== "string") return;
	if (!uiEndString || typeof uiEndString !== "string") return;
	const ui = JSON.parse(uiContentString);
	const uiEnd = JSON.parse(uiEndString);

	if (ui?.content?.length < 1) return null;

	const titleArr = ui?.title?.split(" ") ?? "";

	return (
		<section ref={containerRef} className={css.container}>
			{/* title */}
			<h2 className={css.h2}>
				<motion.span
					ref={refTitle_1}
					className={`${css.title_1} f_serif_primary`}
					variants={SECTION_PROJECTS_ANIMATION.title}
					initial="initial"
					whileInView="animate"
					viewport={SECTION_PROJECTS_ANIMATION.title.viewport}
				>
					{titleArr[0]}
				</motion.span>
				<div className={css.container_title}>
					<motion.span
						ref={refTitle_2}
						className={`${css.title_2} f_serif_secondary`}
						variants={SECTION_PROJECTS_ANIMATION.title}
						initial="initial"
						whileInView="animate"
						viewport={SECTION_PROJECTS_ANIMATION.title.viewport}
					>
						{titleArr[1]}
					</motion.span>
					<motion.span
						ref={refTitle_3}
						className={`${css.title_3} f_serif_primary f_italic`}
						variants={SECTION_PROJECTS_ANIMATION.title}
						initial="initial"
						whileInView="animate"
						viewport={SECTION_PROJECTS_ANIMATION.title.viewport}
					>
						{titleArr[2]}
					</motion.span>
				</div>
			</h2>

			{/* content */}
			<ul className={css.list}>
				{ui?.content?.map(({ _key, content }: PropsContent, i: number) => (
					<ItemContent
						key={_key}
						ui={content}
						currentNum={i + 1}
						totalNum={ui?.content?.length}
						label={ui?.label}
					/>
				))}
			</ul>

			{/* end */}
			<motion.div
				ref={refContainer}
				className={css.end_container}
				variants={SECTION_PROJECTS_ANIMATION.end}
				initial="hidden"
				whileInView="visible"
				viewport={SECTION_PROJECTS_ANIMATION.end.viewport}
			>
				<motion.span
					className={css.icon}
					style={{
						x: negativeX,
					}}
				>
					<IconAsterisk size={8} />
				</motion.span>
				<span className={`${css.end_title} f_mono`}>{uiEnd?.title}</span>
				<motion.span
					className={css.icon}
					style={{
						x: xValue,
					}}
				>
					<IconAsterisk size={8} />
				</motion.span>
			</motion.div>
		</section>
	);
}

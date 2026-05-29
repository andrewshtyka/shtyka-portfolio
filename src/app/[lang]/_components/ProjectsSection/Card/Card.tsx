"use client";

// #region ============================== Imports

// animation
import { motion, useInView } from "motion/react";

// components
import VideoProject from "@/components/VideoProject/VideoProject";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";
import Divider from "@/components/Divider/Divider";
import IconArrowShortCut from "@/components/Icons/IconArrowShortCut/IconArrowShortCut";
import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";

// constants
import { SECTION_PROJECTS_ANIMATION } from "@/constants/animation";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// styles
import css from "./Card.module.css";

// types
import { Props } from "./Card.types";

// utils
import { useParams } from "next/navigation";
import React from "react";
import { fixTypography } from "@/lib/util/fixTypography";

// #endregion ===========================

export default function Card({ uiString, buttonTitle = "" }: Props) {
	const params = useParams<{ lang: string }>();
	const lang = params?.lang ?? "en";
	const ui = JSON.parse(uiString);

	// animation - title
	const refTitle = React.useRef<HTMLHeadingElement>(null);
	const isTitleInView = useInView(refTitle, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const { play: playTitle } = useLinkHover(refTitle);
	React.useEffect(() => {
		if (isTitleInView) playTitle?.();
	}, [isTitleInView, playTitle]);

	return (
		<li className={css.container}>
			{/* video */}
			<div className={css.container_video}>
				<VideoProject
					video={ui?.heroVideo?.video}
					poster={ui?.heroVideo?.poster}
				/>
			</div>

			{/* info */}
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
							{fixTypography(ui?.about?.description)}
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
				<ProjectDetails uiString={uiString} />

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

"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";
import Divider from "@/components/Divider/Divider";
import VideoProject from "@/components/VideoProject/VideoProject";
import IconArrowShortCut from "@/components/Icons/IconArrowShortCut/IconArrowShortCut";
import DotsBg from "@/components/DotsBg/DotsBg";

// constants
import { PROJECT_INTRO_ANIMATION } from "@/constants/animation";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// styles
import css from "./IntroSection.module.css";

// types
import { Props } from "./IntroSection.types";

// utility
import React from "react";
import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";

// #endregion ===========================

export default function IntroSection({ uiString }: Props) {
	const refHeading = React.useRef<HTMLHeadingElement>(null);
	const { play: playHeading } = useLinkHover(refHeading);

	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);

	return (
		<section className={css.container}>
			{/* dots */}
			<DotsBg saturation={60} yPosition={10} />

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
				<ProjectDetails uiString={uiString} offset="large" />
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

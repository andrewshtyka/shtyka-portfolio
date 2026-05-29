"use client";

// #region ============================== imports

// animation
import { motion, useInView } from "motion/react";

// constants
import { SECTION_PROJECTS_ANIMATION } from "@/constants/animation";

// hooks
import useVideoObserver from "@/hooks/useVideoObserver";

// styles
import css from "./VideoProject.module.css";

// types
import { Props } from "./VideoProject.types";

// utils
import getUrlForVideo from "@/lib/util/getUrlForVideo";
import React from "react";

// #endregion ===========================

export default function VideoProject({ video, poster }: Props) {
	const videoRef = React.useRef<HTMLVideoElement>(null);
	const isInView = useInView(videoRef, { amount: 0.1 });
	useVideoObserver(videoRef);

	if (
		!video ||
		typeof video !== "object" ||
		!poster ||
		typeof poster !== "object"
	)
		return null;

	const data = getUrlForVideo(video, poster) ?? "";
	if (!data || typeof data !== "object") return null;

	return (
		<motion.video
			ref={videoRef}
			data-src={data?.video}
			preload="none"
			muted
			loop
			playsInline
			width="100%"
			height="100%"
			poster={data?.poster}
			className={css.video}
			//
			// motion
			variants={SECTION_PROJECTS_ANIMATION.project.video}
			initial="initial"
			animate={isInView ? "show" : "hide"}
			transition={SECTION_PROJECTS_ANIMATION.project.video.transition}
		></motion.video>
	);
}

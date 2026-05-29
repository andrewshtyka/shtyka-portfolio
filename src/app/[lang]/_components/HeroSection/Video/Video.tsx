"use client";

// #region ============================== Imports

// animation
import { motion, useInView } from "motion/react";

// constants
import { SECTION_HERO_ANIMATION } from "@/constants/animation";

// hooks
import useVideoObserver from "@/hooks/useVideoObserver";

// styles
import css from "./Video.module.css";

// types
import { Props } from "./Video.types";

// utils
import getUrlForVideo from "@/lib/util/getUrlForVideo";
import React from "react";

// #endregion ===========================

export default function Video({ video, poster }: Props) {
	const videoRef = React.useRef<HTMLVideoElement>(null);
	const isInView = useInView(videoRef, { amount: 0.1 });
	useVideoObserver(videoRef);

	const data = getUrlForVideo(video, poster) ?? "";
	if (!data || typeof data !== "object") return null;

	return (
		<div className={css.container}>
			<motion.video
				ref={videoRef}
				data-src={data?.video}
				preload="eager"
				muted
				loop
				playsInline
				width="100%"
				poster={data?.poster}
				variants={SECTION_HERO_ANIMATION.video}
				initial="initial"
				animate={isInView ? "show" : "hide"}
				transition={SECTION_HERO_ANIMATION.video.transition}
			></motion.video>
			<div className={css.overlay_top}></div>
			<div className={css.overlay_bottom}></div>
		</div>
	);
}

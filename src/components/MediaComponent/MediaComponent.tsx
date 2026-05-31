"use client";

// #region ============================== Imports

// animation
import { motion, useInView } from "motion/react";

// components
import Image from "next/image";

// constants
import { SECTION_EXPERIMENTS_ANIMATION } from "@/constants/animation";

// hooks
import useVideoObserver from "@/hooks/useVideoObserver";

// styles
import css from "./MediaComponent.module.css";

// types
import { Props } from "./MediaComponent.types";

// utils
import getUrlForImage from "@/lib/util/getUrlForImage";
import getUrlForVideo from "@/lib/util/getUrlForVideo";
import React from "react";

// #endregion ===========================

export const MotionImage = motion.create(Image);

export default function MediaComponent({
	uiString,
	hasTop = true,
	topHeight = 30,
	hasBottom = true,
	bottomHeight = 20,
}: Props) {
	const videoRef = React.useRef<HTMLVideoElement>(null);
	const imageRef = React.useRef<HTMLImageElement>(null);
	const isInViewVideo = useInView(videoRef, { amount: 0.1 });
	const isInViewImage = useInView(imageRef, { amount: 0.1 });
	useVideoObserver(videoRef);

	if (!uiString || typeof uiString !== "string") return null;

	const ui = JSON.parse(uiString);
	if (!ui || typeof ui !== "object") return null;

	const styleTop = hasTop ? { height: `${topHeight}%` } : { display: "none" };
	const styleBottom = hasBottom
		? { height: `${bottomHeight}%` }
		: { display: "none" };

	if (ui?._type === "video") {
		const data = getUrlForVideo(ui?.video, ui?.poster) ?? "";
		if (!data || typeof data !== "object") return null;

		return (
			<>
				<motion.video
					ref={videoRef}
					data-src={data?.video}
					preload="none"
					muted
					loop
					playsInline
					width="100%"
					height="100%"
					poster={data.poster}
					className={css.video}
					//
					// motion
					variants={SECTION_EXPERIMENTS_ANIMATION.experiment.video}
					initial="initial"
					animate={isInViewVideo ? "show" : "hide"}
					// animate="show"
					transition={SECTION_EXPERIMENTS_ANIMATION.experiment.video.transition}
				></motion.video>
				<div className={css.overlay_top} style={styleTop}></div>
				<div className={css.overlay_bottom} style={styleBottom}></div>
			</>
		);
	} else if (ui?._type === "imageExperiment" || ui?._type === "imageDetails") {
		const src = getUrlForImage(ui?.image)?.url() ?? "";

		return (
			<>
				<MotionImage
					ref={imageRef}
					src={src}
					alt={ui?.alt}
					sizes="100%"
					fill={true}
					preload={true}
					className={css.image}
					// 
					// motion
					variants={SECTION_EXPERIMENTS_ANIMATION.experiment.video}
					initial="initial"
					animate={isInViewImage ? "show" : "hide"}
					// animate="show"
					transition={SECTION_EXPERIMENTS_ANIMATION.experiment.video.transition}
				/>

				<div className={css.overlay_top} style={styleTop}></div>
				<div className={css.overlay_bottom} style={styleBottom}></div>
			</>
		);
	} else return null;
}

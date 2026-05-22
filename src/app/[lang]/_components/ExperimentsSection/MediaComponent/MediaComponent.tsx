"use client";

// #region ============================== Imports

// components
import Image from "next/image";

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

export default function MediaComponent({ uiString }: Props) {
	const videoRef = React.useRef<HTMLVideoElement>(null);
	useVideoObserver(videoRef);

	if (!uiString || typeof uiString !== "string") return null;

	const ui = JSON.parse(uiString);
	if (!ui || typeof ui !== "object") return null;

	if (ui._type === "video") {
		const data = getUrlForVideo(ui.video, ui.poster) ?? "";
		if (!data || typeof data !== "object") return null;

		return (
			<>
				<video
					ref={videoRef}
					autoPlay
					muted
					loop
					playsInline
					width="100%"
					height="100%"
					poster={data.poster}
					className={css.video}
				>
					<source src={data.video} type="video/mp4" />
				</video>
				{/* <div className={css.test}></div> */}
				<div className={css.overlay_top}></div>
				<div className={css.overlay_bottom}></div>
			</>
		);
	} else if (ui._type === "imageExperiment") {
		const src = getUrlForImage(ui.image)?.url() ?? "";

		return (
			<>
				<Image
					src={src}
					alt={ui.alt}
					sizes="100%"
					fill={true}
					preload={true}
					className={css.image}
				/>
				{/* <div className={css.test}></div> */}
				<div className={css.overlay_top}></div>
				<div className={css.overlay_bottom}></div>
			</>
		);
	} else return null;
}

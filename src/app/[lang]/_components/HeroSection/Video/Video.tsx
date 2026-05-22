"use client";

// #region ============================== Imports

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
	useVideoObserver(videoRef);

	const data = getUrlForVideo(video, poster) ?? "";
	if (!data || typeof data !== "object") return null;

	return (
		<div className={css.container}>
			<video
				ref={videoRef}
				autoPlay
				muted
				loop
				playsInline
				width="100%"
				poster={data.poster}
			>
				<source src={data.video} type="video/mp4" />
			</video>
			<div className={css.overlay_top}></div>
			<div className={css.overlay_bottom}></div>
		</div>
	);
}

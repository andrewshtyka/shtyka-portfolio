"use client";

// #region ============================== imports

// styles
import css from "./VideoProject.module.css";

// hooks
import useVideoObserver from "@/hooks/useVideoObserver";

// types
import { Props } from "./VideoProject.types";

// utils
import getUrlForVideo from "@/lib/util/getUrlForVideo";
import React from "react";

// #endregion ===========================

export default function VideoProject({ video, poster }: Props) {
	const videoRef = React.useRef<HTMLVideoElement>(null);
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
		<video
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
		></video>
	);
}

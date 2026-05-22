"use client";

// #region ============================== Imports

// components
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";
import IconAsterisk from "@/components/Icons/IconAsterisk/IconAsterisk";

// hooks
import useVideoObserver from "@/hooks/useVideoObserver";

// styles
import css from "./ResumeSection.module.css";

// sanity
import { getFileAsset } from "@sanity/asset-utils";
import { client } from "@/sanity/lib/client";

// types
import { Props } from "./ResumeSection.types";

// utility
import React from "react";

// #endregion ===========================

const { projectId, dataset } = client.config();

export default function ResumeSection({ uiString }: Props) {
	const videoRef = React.useRef<HTMLVideoElement>(null);
	useVideoObserver(videoRef);

	if (!uiString || typeof uiString !== "string") return;
	const [ui, file, fileName] = JSON.parse(uiString);

	const data = {
		title_1: ui[0]?.children[0].text ?? "",
		title_2: ui[1]?.children[0].text ?? "",
		label: ui[2]?.children[0].text ?? "",
		href:
			getFileAsset(file, {
				projectId,
				dataset,
			}).url ?? "",
		fileName: fileName,
	};

	return (
		<a
			href={`${data.href}/${data.fileName}`}
			target="_blank"
			rel="noopener noreferrer"
			className={css.a}
		>
			{/* video */}
			<div className={css.container_video}>
				<video
					ref={videoRef}
					data-src="/assets/resume-video.mp4"
					preload="none"
					muted
					loop
					playsInline
					width="100%"
					poster="/assets/resume-poster.webp"
					className={css.video}
				></video>
			</div>

			{/* top */}
			<span className={css.top}>
				<h2 className={css.h2}>
					<span className={`${css.title_1} f_serif_secondary`}>
						{data.title_1}
					</span>
					<span className={`${css.title_2} f_serif_secondary f_italic`}>
						{data.title_2}
					</span>
				</h2>
				<span className={css.container_icon}>
					<IconAsterisk size={8} />
				</span>
			</span>

			{/* bottom */}
			<span className={css.bottom}>
				<span className={`f_mono`}>{data.label}</span>
				<IconArrowCurve size={10} direction="right" />
			</span>
		</a>
	);
}

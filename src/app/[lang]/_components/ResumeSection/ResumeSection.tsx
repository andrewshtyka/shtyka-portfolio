"use client";

// #region ============================== Imports

// components
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";
import IconAsterisk from "@/components/Icons/IconAsterisk/IconAsterisk";

// hooks
import useVideoObserver from "@/hooks/useVideoObserver";
import { useBlur } from "@/hooks/useBlur";
import { useLinkHover } from "@/hooks/animation/useLinkHover";
import { useIconHover } from "@/hooks/animation/useIconHover";

// styles
import css from "./ResumeSection.module.css";

// sanity
import { getFileAsset } from "@sanity/asset-utils";
import { client } from "@/sanity/lib/client";

// types
import { Props } from "./ResumeSection.types";

// utility
import React from "react";
import Magnetic from "@/components/Magnetic/Magnetic";

// #endregion ===========================

const { projectId, dataset } = client.config();

export default function ResumeSection({ uiString }: Props) {
	const videoRef = React.useRef<HTMLVideoElement>(null);
	useVideoObserver(videoRef);

	useBlur();

	// animate text
	const refText_1 = React.useRef<HTMLAnchorElement>(null);
	const refText_2 = React.useRef<HTMLAnchorElement>(null);
	const refText_3 = React.useRef<HTMLAnchorElement>(null);
	const { play: play_1 } = useLinkHover(refText_1, true);
	const { play: play_2 } = useLinkHover(refText_2, true, 1);
	const { play: play_3 } = useLinkHover(refText_3, true, 2);

	// animate icon
	const refIcon = React.useRef<HTMLAnchorElement>(null);
	const refIconContainer = React.useRef<HTMLAnchorElement>(null);
	const { play: playIcon } = useIconHover(refIcon, refIconContainer);

	if (!uiString || typeof uiString !== "string") return;
	const [ui, file, fileName] = JSON.parse(uiString);

	const data = {
		title_1: ui[0]?.children[0]?.text ?? "",
		title_2: ui[1]?.children[0]?.text ?? "",
		label: ui[2]?.children[0]?.text ?? "",
		href:
			getFileAsset(file, {
				projectId,
				dataset,
			})?.url ?? "",
		fileName: fileName,
	};

	return (
		<Magnetic>
			<a
				href={`${data?.href}/${data?.fileName}`}
				target="_blank"
				rel="noopener noreferrer"
				className={css.link}
				onMouseEnter={() => {
					playIcon?.();
					play_1?.();
					play_2?.();
					play_3?.();
				}}
				onFocus={() => {
					playIcon?.();
					play_1?.();
					play_2?.();
					play_3?.();
				}}
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
					></video>
				</div>

				{/* top */}
				<span className={css.top}>
					<h2 className={css.h2}>
						<span
							ref={refText_1}
							className={`${css.title_1} f_serif_secondary`}
						>
							{data?.title_1}
						</span>
						<span
							ref={refText_2}
							className={`${css.title_2} f_serif_secondary f_italic`}
						>
							{data?.title_2}
						</span>
					</h2>
					<span className={css.container_icon_top}>
						<IconAsterisk size={8} />
					</span>
				</span>

				{/* bottom */}
				<span className={css.bottom}>
					<span ref={refText_3} className={`f_mono`}>
						{data?.label}
					</span>
					<span ref={refIconContainer} className={css.container_icon}>
						<span ref={refIcon} className={css.icon}>
							<IconArrowCurve size={10} direction="right" />
						</span>
					</span>
				</span>
			</a>
		</Magnetic>
	);
}

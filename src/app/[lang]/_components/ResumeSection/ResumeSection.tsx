"use client";

// #region ============================== Imports

// animation
import { motion, useInView } from "motion/react";

// components
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";
import IconAsterisk from "@/components/Icons/IconAsterisk/IconAsterisk";

// constants
import { SECTION_RESUME_ANIMATION } from "@/constants/animation";

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

	const isText_1_InView = useInView(refText_1, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const isText_2_InView = useInView(refText_2, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const isText_3_InView = useInView(refText_3, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});

	React.useEffect(() => {
		if (isText_1_InView) play_1?.();
	}, [isText_1_InView, play_1]);

	React.useEffect(() => {
		if (isText_2_InView) play_2?.();
	}, [isText_2_InView, play_2]);

	React.useEffect(() => {
		if (isText_3_InView) play_3?.();
	}, [isText_3_InView, play_3]);

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
			<motion.a
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
				variants={SECTION_RESUME_ANIMATION.card}
				initial="initial"
				whileInView="animate"
				transition={SECTION_RESUME_ANIMATION.card.transition}
				viewport={SECTION_RESUME_ANIMATION.card.viewport}
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
						<motion.span
							ref={refText_1}
							className={`${css.title_1} f_serif_secondary`}
							variants={SECTION_RESUME_ANIMATION.text}
							initial="initial"
							whileInView="animate"
							transition={SECTION_RESUME_ANIMATION.text.transition}
							viewport={SECTION_RESUME_ANIMATION.text.viewport}
						>
							{data?.title_1}
						</motion.span>
						<motion.span
							ref={refText_2}
							className={`${css.title_2} f_serif_secondary f_italic`}
							variants={SECTION_RESUME_ANIMATION.text}
							initial="initial"
							whileInView="animate"
							transition={SECTION_RESUME_ANIMATION.text.transition}
							viewport={SECTION_RESUME_ANIMATION.text.viewport}
						>
							{data?.title_2}
						</motion.span>
					</h2>
					<span className={css.container_icon_top}>
						<IconAsterisk size={8} />
					</span>
				</span>

				{/* bottom */}
				<span className={css.bottom}>
					<motion.span
						ref={refText_3}
						className={`f_mono`}
						variants={SECTION_RESUME_ANIMATION.text}
						initial="initial"
						whileInView="animate"
						transition={SECTION_RESUME_ANIMATION.text.transition}
						viewport={SECTION_RESUME_ANIMATION.text.viewport}
					>
						{data?.label}
					</motion.span>
					<span ref={refIconContainer} className={css.container_icon}>
						<span ref={refIcon} className={css.icon}>
							<IconArrowCurve size={10} direction="right" />
						</span>
					</span>
				</span>
			</motion.a>
		</Magnetic>
	);
}

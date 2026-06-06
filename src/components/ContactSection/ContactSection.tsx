"use client";

// #region ============================== Imports

// animation
import { motion, useInView } from "motion/react";

// components
import Message from "./Message/Message";

// constants
import { HOME_SECTIONS } from "@/constants/sectionNames";
import { SECTION_CONTACT_ANIMATION } from "@/constants/animation";

// hooks
import useVideoObserver from "@/hooks/useVideoObserver";
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// styles
import getUrlForVideo from "@/lib/util/getUrlForVideo";
import css from "./ContactSection.module.css";

// types
import { Props } from "./ContactSection.types";
import { ItemMaster } from "./Message/Message.types";

// utils
import getLabelsWithLinks from "./lib/helpers/getLabelsWithLinks";
import React from "react";
import getUrlForImage from "@/lib/util/getUrlForImage";
import { MotionImage } from "../MediaComponent/MediaComponent";

// #endregion ===========================

export default function ContactSection({ uiString }: Props) {
	// #region ============================== Animation

	// animation - titles
	const refTitle_1 = React.useRef<HTMLHeadingElement>(null);
	const refTitle_2 = React.useRef<HTMLHeadingElement>(null);

	const isTitle_1_InView = useInView(refTitle_1, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const isTitle_2_InView = useInView(refTitle_2, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});

	const { play: playTitle_1 } = useLinkHover(refTitle_1);
	const { play: playTitle_2 } = useLinkHover(refTitle_2, true, 2);

	React.useEffect(() => {
		if (isTitle_1_InView) playTitle_1?.();
	}, [isTitle_1_InView, playTitle_1]);

	React.useEffect(() => {
		if (isTitle_2_InView) playTitle_2?.();
	}, [isTitle_2_InView, playTitle_2]);

	// animation - video
	const videoRef = React.useRef<HTMLVideoElement>(null);
	const isInView = useInView(videoRef, { amount: 0.1 });
	useVideoObserver(videoRef);

	// #endregion ===========================

	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);
	if (!ui || typeof ui !== "object") return;

	// title
	const dataTitle = {
		title_1: ui?.title[0]?.children[0]?.text ?? "",
		title_2: ui?.title[1]?.children[0]?.text ?? "",
	};

	// video
	const dataVideo = getUrlForVideo(ui?.video?.video, ui?.video?.poster) ?? "";
	const isVideoVisible = ui?.video.isVideoVisible && dataVideo;

	// image
	const dataImage = getUrlForImage(ui?.image?.image)?.url() ?? "";
	const isImageVisible = ui?.image.isImageVisible && dataImage;

	// message
	const dataMessage_1 =
		getLabelsWithLinks(ui?.message[0], ui?.fileName)?.filter(
			(item): item is ItemMaster => !!item && typeof item !== "string"
		) ?? null;
	const dataMessage_2 =
		getLabelsWithLinks(ui?.message[1], ui?.fileName)?.filter(
			(item): item is ItemMaster => !!item && typeof item !== "string"
		) ?? null;

	return (
		<section id={HOME_SECTIONS.contact} className={css.container}>
			{/* title */}
			<h2 className={css.h2}>
				<motion.span
					ref={refTitle_1}
					className={`${css.title_1} f_serif_primary`}
					variants={SECTION_CONTACT_ANIMATION.title}
					initial="initial"
					whileInView="animate"
					viewport={SECTION_CONTACT_ANIMATION.title.viewport}
				>
					{dataTitle?.title_1}
				</motion.span>
				<motion.span
					ref={refTitle_2}
					className={`${css.title_2} f_serif_primary f_italic`}
					variants={SECTION_CONTACT_ANIMATION.title}
					initial="initial"
					whileInView="animate"
					viewport={SECTION_CONTACT_ANIMATION.title.viewport}
				>
					{dataTitle?.title_2}
				</motion.span>
			</h2>

			{/* video */}
			{isVideoVisible && (
				<div className={css.container_media}>
					<motion.video
						ref={videoRef}
						data-src={dataVideo?.video ?? ""}
						preload="none"
						muted
						loop
						playsInline
						width="100%"
						height="100%"
						poster={dataVideo?.poster ?? ""}
						className={css.media}
						//
						// motion
						variants={SECTION_CONTACT_ANIMATION.video}
						initial="initial"
						animate={isInView ? "show" : "hide"}
						transition={SECTION_CONTACT_ANIMATION.video.transition}
					></motion.video>
				</div>
			)}

			{/* image */}
			{isImageVisible && (
				<div className={css.container_media}>
					<MotionImage
						src={dataImage}
						alt={ui?.image?.alt}
						sizes="100%"
						fill={true}
						preload={true}
						className={css.media}
						//
						// motion
						variants={SECTION_CONTACT_ANIMATION.video}
						initial="initial"
						whileInView="show"
						transition={SECTION_CONTACT_ANIMATION.video.transition}
					/>
				</div>
			)}

			{/* message */}
			<motion.div
				className={`${css.container_message} f_display_subtitle`}
				variants={SECTION_CONTACT_ANIMATION.message}
				initial="hidden"
				whileInView="visible"
				viewport={SECTION_CONTACT_ANIMATION.message.viewport}
			>
				{/* top */}
				<Message arr={dataMessage_1} />
				<Message arr={dataMessage_2} />
			</motion.div>
		</section>
	);
}

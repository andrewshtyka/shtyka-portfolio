"use client";

// #region ============================== Imports

// constants
import { HOME_SECTIONS } from "@/constants/sectionNames";

// hooks
import useVideoObserver from "@/hooks/useVideoObserver";

// styles
import getUrlForVideo from "@/lib/util/getUrlForVideo";
import css from "./ContactSection.module.css";

// types
import { Props } from "./ContactSection.types";
import { ItemMaster } from "./Message/Message.types";

// utils
import getLabelsWithLinks from "./lib/helpers/getLabelsWithLinks";
import Message from "./Message/Message";
import React from "react";

// #endregion ===========================

export default function ContactSection({ uiString }: Props) {
	const videoRef = React.useRef<HTMLVideoElement>(null);
	useVideoObserver(videoRef);

	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);
	if (!ui || typeof ui !== "object") return;

	const dataTitle = {
		title_1: ui?.title[0]?.children[0]?.text ?? "",
		title_2: ui?.title[1]?.children[0]?.text ?? "",
	};

	const dataVideo = getUrlForVideo(ui?.video?.video, ui?.video?.poster) ?? "";

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
			<h2>
				<span className={`${css.title_1} f_serif_primary`}>
					{dataTitle?.title_1}
				</span>
				<span className={`${css.title_2} f_serif_primary f_italic`}>
					{dataTitle?.title_2}
				</span>
			</h2>

			{/* video */}
			{dataVideo && (
				<div className={css.container_video}>
					<video
						ref={videoRef}
						data-src={dataVideo?.video ?? ""}
						preload="none"
						muted
						loop
						playsInline
						width="100%"
						height="100%"
						poster={dataVideo?.poster ?? ""}
						className={css.video}
					></video>
				</div>
			)}

			{/* message */}
			<div className={`${css.container_message} f_display_subtitle`}>
				{/* top */}
				<Message arr={dataMessage_1} />
				<Message arr={dataMessage_2} />
			</div>
		</section>
	);
}

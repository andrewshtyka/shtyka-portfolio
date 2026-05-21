// #region ============================== Imports

// styles
import getUrlForVideo from "@/lib/util/getUrlForVideo";
import css from "./ContactSection.module.css";

// types
import { Props } from "./ContactSection.types";

// utils
import getLabelsWithLinks from "./lib/helpers/getLabelsWithLinks";
import { span } from "motion/react-client";
import LinkText from "../LinkText/LinkText";
import Message from "./Message/Message";

// #endregion ===========================

export default function ContactSection({ uiString }: Props) {
	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);
	if (!ui || typeof ui !== "object") return;

	const dataTitle = {
		title_1: ui?.title[0]?.children[0].text ?? "",
		title_2: ui?.title[1]?.children[0].text ?? "",
	};

	// TODO
	// 1. heroscreen - tags. add tooltips with full name of technology
	// 2. fit width

	const dataVideo = getUrlForVideo(ui.video.video, ui.video.poster) ?? "";

	const dataMessage_1 = getLabelsWithLinks(ui.message[0], ui.fileName);
	const dataMessage_2 = getLabelsWithLinks(ui.message[1], ui.fileName);

	return (
		<section className={css.container}>
			{/* title */}
			<h2>
				<span className={`${css.title_1} f_serif_primary`}>
					{dataTitle.title_1}
				</span>
				<span className={`${css.title_2} f_serif_primary f_italic`}>
					{dataTitle.title_2}
				</span>
			</h2>

			{/* video */}
			{dataVideo && (
				<div className={css.container_video}>
					<video
						autoPlay
						muted
						loop
						playsInline
						width="100%"
						height="100%"
						poster={dataVideo.poster}
						className={css.video}
					>
						<source src={dataVideo.video} type="video/mp4" />
					</video>
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

// #region ============================== Imports

// sanity
import { getFileAsset } from "@sanity/asset-utils";
import { client } from "@/sanity/lib/client";

// styles
import css from "./MediaComponent.module.css";

// types
import { Props } from "./MediaComponent.types";

// utils
import getUrlForImage from "@/lib/util/getUrlForImage";
import Image from "next/image";

// #endregion ===========================

const { projectId, dataset } = client.config();

export default function MediaComponent({ uiString }: Props) {
	if (!uiString || typeof uiString !== "string") return null;

	const ui = JSON.parse(uiString);

	if (!ui || typeof ui !== "object") return null;

	if (ui._type === "video") {
		const videoUrl = getFileAsset(ui.video, {
			projectId,
			dataset,
		}).url;

		const posterUrl = getUrlForImage(ui.poster)?.url() ?? "";

		return (
			<>
				<video
					autoPlay
					muted
					loop
					playsInline
					width="100%"
					height="100%"
					poster={posterUrl}
					className={css.video}
				>
					<source src={videoUrl} type="video/mp4" />
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

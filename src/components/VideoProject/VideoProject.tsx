// #region ============================== imports
// sanity
import { getFileAsset } from "@sanity/asset-utils";
import { client } from "@/sanity/lib/client";

// styles
import css from "./VideoProject.module.css";

// types
import { Props } from "./VideoProject.types";

// utils
import getUrlForImage from "@/lib/util/getUrlForImage";
// #endregion ===========================

const { projectId, dataset } = client.config();

export default function VideoProject({ video, poster }: Props) {
	const videoUrl = getFileAsset(video, {
		projectId,
		dataset,
	}).url;

	const posterUrl = getUrlForImage(poster)?.url() ?? "";

	return (
		<div className={css.container}>
			<video
				autoPlay
				muted
				loop
				playsInline
				width="100%"
				height="100%"
				poster={posterUrl}
			>
				<source src={videoUrl} type="video/mp4" />
			</video>
		</div>
	);
}

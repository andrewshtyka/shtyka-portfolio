// #region ============================== Imports

// sanity
import { getFileAsset } from "@sanity/asset-utils";
import { client } from "@/sanity/lib/client";

// styles
import css from "./Video.module.css";

// types
import { Props } from "./Video.types";
import getUrlForImage from "@/lib/util/getUrlForImage";

// #endregion ===========================

const { projectId, dataset } = client.config();

export default function Video({ video, poster }: Props) {
	const videoUrl = getFileAsset(video, {
		projectId,
		dataset,
	}).url;

	const posterUrl = getUrlForImage(poster)?.url() ?? "";

	return (
		<div className={css.container}>
			<video autoPlay muted loop playsInline width="100%" poster={posterUrl}>
				<source src={videoUrl} type="video/mp4" />
			</video>
			<div className={css.overlay_top}></div>
			<div className={css.overlay_bottom}></div>
		</div>
	);
}

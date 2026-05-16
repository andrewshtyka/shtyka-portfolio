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

export default function Video({ video, poster, variant = "preview" }: Props) {
	const videoUrl = getFileAsset(video, {
		projectId,
		dataset,
	}).url;

	const posterUrl = getUrlForImage(poster)?.url() ?? "";

	const style = {
		height: variant === "fullscreen" ? "100svh" : "calc(var(--space-20) * 2)",
	};

	return (
		<div className={css.container} style={style}>
			<video autoPlay muted loop playsInline width="100%" poster={posterUrl}>
				<source src={videoUrl} type="video/mp4" />
			</video>
		</div>
	);
}

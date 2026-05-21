// #region ============================== imports

// styles
import css from "./VideoProject.module.css";

// types
import { Props } from "./VideoProject.types";

// utils
import getUrlForVideo from "@/lib/util/getUrlForVideo";
// #endregion ===========================

export default function VideoProject({ video, poster }: Props) {
	const data = getUrlForVideo(video, poster) ?? "";
	if (!data || typeof data !== "object") return null;

	// TODO
	// If not src = return placeholder

	return (
		<video
			autoPlay
			muted
			loop
			playsInline
			width="100%"
			height="100%"
			poster={data.poster}
			className={css.video}
		>
			<source src={data.video} type="video/mp4" />
		</video>
	);
}

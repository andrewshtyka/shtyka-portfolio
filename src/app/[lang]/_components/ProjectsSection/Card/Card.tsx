// components
import VideoProject from "@/components/VideoProject/VideoProject";

// styles
import css from "./Card.module.css";

// types
import { Props } from "./Card.types";

export default function Card({ uiString }: Props) {
	const ui = JSON.parse(uiString);

	return (
		<li className={css.container}>
			{/* video */}
			<VideoProject video={ui.heroVideo.video} poster={ui.heroVideo.poster} />

			{/* details */}
		</li>
	);
}

// #region ============================== Imports

// components
import Video from "./_components/Video";

// types
import { Props } from "./HeroSection.types";

// #endregion ===========================

export default function HeroSection({ uiString }: Props) {
	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);
	console.log(ui);

	return (
		<section>
			<Video
				video={ui.video.video}
				poster={ui.video.poster}
				variant="fullscreen"
			/>
		</section>
	);
}

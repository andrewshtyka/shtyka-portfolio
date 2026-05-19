// styles
import css from "./ResumeSection.module.css";

// sanity
import { getFileAsset } from "@sanity/asset-utils";
import { client } from "@/sanity/lib/client";

// types
import { Props } from "./ResumeSection.types";
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";
import IconAsterisk from "@/components/Icons/IconAsterisk/IconAsterisk";

const { projectId, dataset } = client.config();

export default function ResumeSection({ uiString }: Props) {
	if (!uiString || typeof uiString !== "string") return;
	const [ui, file, fileName] = JSON.parse(uiString);

	const data = {
		title_1: ui[0]?.children[0].text ?? "",
		title_2: ui[1]?.children[0].text ?? "",
		label: ui[2]?.children[0].text ?? "",
		href:
			getFileAsset(file, {
				projectId,
				dataset,
			}).url ?? "",
		fileName: fileName,
	};

	// TODO
	// Add poster for video

	return (
		<a
			href={`${data.href}/${data.fileName}`}
			target="_blank"
			rel="noopener noreferrer"
			className={css.a}
		>
			{/* video */}
			<div className={css.container_video}>
				<video
					autoPlay
					muted
					loop
					playsInline
					width="100%"
					poster=""
					className={css.video}
				>
					<source src="/assets/gradient-video.mp4" type="video/mp4" />
				</video>
				<div className={css.image}></div>
			</div>

			{/* top */}
			<span className={css.top}>
				<h2 className={css.h2}>
					<span className={`${css.title_1} f_serif_secondary`}>
						{data.title_1}
					</span>
					<span className={`${css.title_2} f_serif_secondary f_italic`}>
						{data.title_2}
					</span>
				</h2>
				<span className={css.container_icon}>
					<IconAsterisk size={8} />
				</span>
			</span>

			{/* bottom */}
			<span className={css.bottom}>
				<span className={`f_mono`}>{data.label}</span>
				<IconArrowCurve size={10} />
			</span>
		</a>
	);
}

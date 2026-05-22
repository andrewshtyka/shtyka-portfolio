// #region ============================== Imports

// components
import Video from "./Video/Video";
import Tag from "@/components/Tag/Tag";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";

// sanity
import { getFileAsset } from "@sanity/asset-utils";
import { client } from "@/sanity/lib/client";

// styles
import css from "./HeroSection.module.css";

// types
import { Props } from "./HeroSection.types";
import IconAsterisk from "@/components/Icons/IconAsterisk/IconAsterisk";
import MediaComponent from "@/components/MediaComponent/MediaComponent";

// #endregion ===========================

const { projectId, dataset } = client.config();

export default function HeroSection({ uiString }: Props) {
	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);

	const buttonResumeData = {
		text: ui.resume.title ?? "",
		href:
			getFileAsset(ui.resume.file, {
				projectId,
				dataset,
			}).url ?? "",
		name: ui.fileName ?? "",
	};

	// TODO
	// Nulish coalescing - for checking if data is ok (and to not render if it's not ok)

	return (
		<section className={css.container}>
			<Video video={ui.video.video} poster={ui.video.poster} />

			<div className={css.container_content}>
				<div className={`${css.content} content_padding_limit`}>
					{/* Left part */}
					<div className={css.container_primary}>
						<div className={css.container_title}>
							<h1 className="f_serif_primary">
								{ui.heroTitle[0].children[0].text}
							</h1>
							<h2 className="f_serif_primary f_italic">
								{ui.heroTitle[1].children[0].text}
							</h2>
						</div>
						<p className={`${css.subtitle} f_display_body`}>
							{ui.subtitle[0].children[0].text}
							<span>{ui.subtitle[0].children[1].text}</span>
							<br className={css.br} />
							{ui.subtitle[0].children[2].text}
						</p>
					</div>

					{/* Icons (mobile only) */}
					<div className={css.container_icons}>
						<IconAsterisk color="white" size={10} />
						<IconAsterisk color="white" size={10} />
					</div>

					{/* Right part */}
					<div className={css.container_secondary}>
						<ul className={css.list}>
							{ui.tags.map(
								({
									_key,
									link,
									title,
								}: {
									_key: string;
									link: string;
									title: string;
								}) => (
									<li key={_key} className={css.list_item}>
										<Tag href={link}>{title}</Tag>
									</li>
								)
							)}
						</ul>

						<ButtonPrimary
							href={buttonResumeData.href}
							icon={<IconArrowCurve color="black" direction="right" />}
							fileName={buttonResumeData.name}
						>
							{buttonResumeData.text}
						</ButtonPrimary>
					</div>
				</div>
			</div>
		</section>
	);
}

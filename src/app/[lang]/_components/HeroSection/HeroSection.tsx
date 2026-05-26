"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import Video from "./Video/Video";
import Tag from "@/components/Tag/Tag";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";
import IconAsterisk from "@/components/Icons/IconAsterisk/IconAsterisk";

// constants
import { HOME_SECTIONS } from "@/constants/sectionNames";

// hover
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// sanity
import { getFileAsset } from "@sanity/asset-utils";
import { client } from "@/sanity/lib/client";

// styles
import css from "./HeroSection.module.css";

// types
import { Props } from "./HeroSection.types";

// utility
import React from "react";
import { SECTION_HERO_ANIMATION } from "@/constants/animation";

// #endregion ===========================

const { projectId, dataset } = client.config();

export default function HeroSection({ uiString }: Props) {
	const refTitle_1 = React.useRef<HTMLHeadingElement>(null);
	const refTitle_2 = React.useRef<HTMLHeadingElement>(null);
	const { play: playTitle_1 } = useLinkHover(refTitle_1);
	const { play: playTitle_2 } = useLinkHover(refTitle_2);

	// TODO 1 - REPLACE WITH BETTER SOLUTION
	React.useEffect(() => {
		const idTitle_1 = setTimeout(() => {
			playTitle_1?.();
		}, 1000);

		const idTitle_2 = setTimeout(() => {
			playTitle_2?.();
		}, 1000 * 1.3);

		return () => {
			clearTimeout(idTitle_1);
			clearTimeout(idTitle_2);
		};
	}, []);

	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);

	const buttonResumeData = {
		text: ui?.resume?.title ?? "",
		href:
			getFileAsset(ui?.resume?.file, {
				projectId,
				dataset,
			})?.url ?? "",
		name: ui?.fileName ?? "",
	};

	return (
		<section id={HOME_SECTIONS.index} className={css.container}>
			<Video video={ui?.video?.video} poster={ui?.video?.poster} />

			<div className={css.container_content}>
				<div className={`${css.content} content_padding_limit`}>
					{/* Left part */}
					<div className={css.container_primary}>
						<div className={css.container_title}>
							<motion.h1
								initial={SECTION_HERO_ANIMATION.title_1.initial}
								animate={SECTION_HERO_ANIMATION.title_1.animate}
								transition={SECTION_HERO_ANIMATION.title_1.transition}
								ref={refTitle_1}
								className="f_serif_primary"
							>
								{ui?.heroTitle[0]?.children[0]?.text}
							</motion.h1>
							<motion.h2
								initial={SECTION_HERO_ANIMATION.title_2.initial}
								animate={SECTION_HERO_ANIMATION.title_2.animate}
								transition={SECTION_HERO_ANIMATION.title_2.transition}
								ref={refTitle_2}
								className="f_serif_primary f_italic"
							>
								{ui?.heroTitle[1]?.children[0]?.text}
							</motion.h2>
						</div>
						<p className={`${css.subtitle} f_display_body`}>
							{ui?.subtitle[0]?.children[0]?.text}
							<span>{ui?.subtitle[0]?.children[1]?.text}</span>
							<br className={css.br} />
							{ui?.subtitle[0]?.children[2]?.text}
						</p>
					</div>

					{/* Icons (mobile only) */}
					<div className={`${css.container_icons}`}>
						<IconAsterisk color="white" size={10} />
						<IconAsterisk color="white" size={10} />
					</div>

					{/* Right part */}
					<div className={css.container_secondary}>
						<ul className={css.list}>
							{ui?.tags?.map(
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
							href={buttonResumeData?.href}
							icon={<IconArrowCurve color="black" direction="right" />}
							fileName={buttonResumeData?.name}
						>
							{buttonResumeData?.text}
						</ButtonPrimary>
					</div>
				</div>
			</div>
		</section>
	);
}

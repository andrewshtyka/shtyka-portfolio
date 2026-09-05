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

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// providers / context

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
import { fixTypography } from "@/lib/util/fixTypography";
import HoverLineText from "@/components/HoverLineText/HoverLineText";

// #endregion ===========================

const { projectId, dataset } = client.config();

export default function HeroSection({ uiString }: Props) {
	// texts animation
	const refTitle_1 = React.useRef<HTMLHeadingElement>(null);
	const refTitle_2 = React.useRef<HTMLHeadingElement>(null);
	const refSubtitle = React.useRef<HTMLSpanElement>(null);
	const { play: playTitle_1 } = useLinkHover(refTitle_1);
	const { play: playTitle_2 } = useLinkHover(refTitle_2);
	const { play: playSubtitle } = useLinkHover(refSubtitle);
	React.useEffect(() => {
		const id = setInterval(() => {
			playSubtitle?.();
		}, 4000);
		return () => clearInterval(id);
	}, [playSubtitle]);

	// animation - line on hover
	const refTarget = React.useRef<HTMLDivElement>(null);

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

			<div ref={refTarget} className={css.container_content}>
				<div className={`${css.content} content_padding_limit`}>
					{/* Left part */}
					<div className={css.container_primary}>
						{/* title */}
						<div className={css.container_title}>
							<motion.h1
								variants={SECTION_HERO_ANIMATION.title_1}
								initial="initial"
								animate="animate"
								transition={SECTION_HERO_ANIMATION.title_1.transition}
								onAnimationComplete={playTitle_1}
								ref={refTitle_1}
								className="f_serif_primary"
							>
								{ui?.heroTitle[0]?.children[0]?.text}
							</motion.h1>
							<motion.h2
								variants={SECTION_HERO_ANIMATION.title_2}
								initial="initial"
								animate="animate"
								transition={SECTION_HERO_ANIMATION.title_2.transition}
								onAnimationComplete={playTitle_2}
								ref={refTitle_2}
								className="f_serif_primary f_italic"
							>
								{ui?.heroTitle[1]?.children[0]?.text}
							</motion.h2>
						</div>

						{/* description */}
						<motion.p
							className={`${css.subtitle} f_display_body`}
							initial={SECTION_HERO_ANIMATION.subtitle.initial}
							animate={SECTION_HERO_ANIMATION.subtitle.animate}
							transition={SECTION_HERO_ANIMATION.subtitle.transition}
						>
							{ui?.subtitle[0]?.children[0]?.text}
							<span ref={refSubtitle}>
								{ui?.subtitle[0]?.children[1]?.text}
							</span>
							<br className={css.br} />
							{fixTypography(ui?.subtitle[0]?.children[2]?.text)}
						</motion.p>
					</div>

					{/* Icons (mobile only) */}
					<motion.div
						className={`${css.container_icons}`}
						initial={SECTION_HERO_ANIMATION.dots.initial}
						animate={SECTION_HERO_ANIMATION.dots.animate}
						transition={SECTION_HERO_ANIMATION.dots.transition}
					>
						<IconAsterisk color="white" size={10} />
						<IconAsterisk color="white" size={10} />
					</motion.div>

					{/* Right part */}
					<div className={css.container_secondary}>
						{/* tags */}
						<motion.ul
							className={css.list}
							variants={SECTION_HERO_ANIMATION.list}
							initial="hidden"
							animate="visible"
						>
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
									<motion.li
										key={_key}
										className={css.list_item}
										variants={SECTION_HERO_ANIMATION.listItem}
									>
										<Tag href={link}>{title}</Tag>
									</motion.li>
								)
							)}
						</motion.ul>

						{/* button */}
						{/* <motion.span
							initial={SECTION_HERO_ANIMATION.button.initial}
							animate={SECTION_HERO_ANIMATION.button.animate}
							transition={SECTION_HERO_ANIMATION.button.transition}
						>
							<ButtonPrimary
								href={buttonResumeData?.href}
								icon={<IconArrowCurve color="black" direction="right" />}
								fileName={buttonResumeData?.name}
							>
								{buttonResumeData?.text}
							</ButtonPrimary>
						</motion.span> */}
					</div>
				</div>
			</div>

			<HoverLineText
				refTarget={refTarget}
				shape="line"
				title={ui?.scrollLabel}
			/>
		</section>
	);
}

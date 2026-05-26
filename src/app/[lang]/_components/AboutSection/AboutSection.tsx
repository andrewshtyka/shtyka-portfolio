"use client";

// #region ============================== Imports

// animation
import {
	motion,
	useInView,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "motion/react";

// styles
import css from "./AboutSection.module.css";

// types
import getUrlForImage from "@/lib/util/getUrlForImage";
import { Props } from "./AboutSection.types";

// utils
import LinkText from "@/components/LinkText/LinkText";
import IconSign from "@/components/Icons/IconSign/IconSign";
import TooltipImage from "@/components/TooltipImage/TooltipImage";
import React from "react";

// #endregion ===========================

export default function AboutSection({ uiString }: Props) {
	const refContainer = React.useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: refContainer,
		offset: ["start end", "end start"],
	});

	const scaleValue = useTransform(
		scrollYProgress,
		[0, 0.5, 0.7, 1],
		[1.1, 1, 0.9, 0.7]
	);
	const yValue = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
	const opacityValue = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
	const filterBlurValue = useTransform(
		scrollYProgress,
		[0.6, 1],
		["blur(0px)", "blur(16px)"]
	);

	if (!uiString || typeof uiString !== "string") return;

	// #region ============================== CMS Data processing

	const ui = JSON.parse(uiString);
	const imgSrc = getUrlForImage(ui?.images[0]?.image)?.url() ?? "";
	const imgAlt = ui.images[0].alt ?? "";

	const paragraph_1 = {
		text_1: ui?.message[0]?.children[0]?.text ?? "",
		text_2: {
			src: imgSrc ?? "",
			alt: ui?.images[0]?.alt ?? "",
			text: ui?.message[0]?.children[1]?.text ?? "",
		},
		text_3: ui?.message[0]?.children[2]?.text ?? "",
	};

	const paragraph_2 = {
		text_1: ui?.message[1]?.children[0]?.text ?? "",
		text_2: {
			href: ui?.message[1]?.markDefs[0]?.href ?? "",
			text: ui?.message[1]?.children[1]?.text ?? "",
		},
		text_3: ui?.message[1]?.children[2]?.text ?? "",
	};

	const paragraph_3 = {
		text_1: ui?.message[2]?.children[0]?.text ?? "",
		text_2: {
			href: ui?.message[2]?.markDefs[0]?.href ?? "",
			text: ui?.message[2]?.children[1]?.text ?? "",
		},
		text_3: ui?.message[2]?.children[2]?.text ?? "",
	};

	// #endregion ===========================

	return (
		<section
			ref={refContainer}
			className={`${css.container} content_padding_limit`}
		>
			<motion.div
				style={{
					scale: scaleValue,
					y: yValue,
					opacity: opacityValue,
					filter: filterBlurValue,
				}}
				className={css.content}
			>
				{/* Paragraph 1 */}
				<p className="f_display_subtitle">
					{paragraph_1?.text_1}
					<TooltipImage src={imgSrc} alt={imgAlt}>
						{paragraph_1?.text_2?.text}
					</TooltipImage>
					{paragraph_1?.text_3}
				</p>

				{/* Paragraph 2 */}
				<p className="f_display_subtitle">
					{paragraph_2?.text_1}
					<LinkText href={paragraph_2?.text_2?.href}>
						{paragraph_2?.text_2?.text}
					</LinkText>
					{paragraph_2?.text_3}
				</p>

				{/* Paragraph 3 */}
				<p className="f_display_subtitle">
					{paragraph_3?.text_1}
					<LinkText href={paragraph_3?.text_2?.href}>
						{paragraph_3?.text_2?.text}
					</LinkText>
					{paragraph_3?.text_3}
				</p>

				{/* Sign */}
				<div className={css.container_details}>
					<span className={css.container_image}>
						<IconSign />
					</span>

					<p className={`${css.details} f_mono`}>
						{ui?.details[0]?.children[0]?.text}
					</p>
					<p className={`${css.details} f_mono`}>
						{ui?.details[1]?.children[0]?.text}
					</p>
				</div>
			</motion.div>
		</section>
	);
}

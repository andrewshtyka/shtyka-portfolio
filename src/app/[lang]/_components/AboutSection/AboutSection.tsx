"use client";

// #region ============================== Imports

// animation
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
	useInView,
} from "motion/react";

// components
import { SECTION_ABOUT_ANIMATION } from "@/constants/animation";

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
	// container animation
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
	const yValue = useTransform(
		scrollYProgress,
		[0, 0.6, 1],
		["50px", "0px", "-50px"]
	);
	const opacityValue = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
	const filterBlurValue = useTransform(
		scrollYProgress,
		[0.7, 1],
		["blur(0px)", "blur(16px)"]
	);

	// signa animation
	const refSign = React.useRef<HTMLDivElement | null>(null);
	const refDetails = React.useRef<HTMLSpanElement | null>(null);
	const isInView = useInView(refSign, { once: true });

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
				<div ref={refSign} className={css.container_details}>
					<span className={css.container_image}>
						<IconSign isInView={isInView} />
					</span>

					<motion.span
						ref={refDetails}
						variants={SECTION_ABOUT_ANIMATION.details}
						initial="hide"
						animate={isInView ? "show" : "hide"}
						transition={SECTION_ABOUT_ANIMATION.details.transition}
					>
						<p className={`${css.details} f_mono`}>
							{ui?.details[0]?.children[0]?.text}
						</p>
						<p className={`${css.details} f_mono`}>
							{ui?.details[1]?.children[0]?.text}
						</p>
					</motion.span>
				</div>
			</motion.div>
		</section>
	);
}

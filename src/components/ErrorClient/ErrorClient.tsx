"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import Emblem from "../Icons/Emblem/Emblem";
import IconArrowShortCut from "../Icons/IconArrowShortCut/IconArrowShortCut";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import DotsBg from "../DotsBg/DotsBg";

// constants

// fonts
import { fontDisplay, fontMono, fontSerif } from "@/lib/util/importFonts";

// hooks

// providers / context

// styles
import css from "./ErrorClient.module.css";

// types
import { Props } from "./ErrorClient.types";

// utility
import React from "react";
import IconArrowCurve from "../Icons/IconArrowCurve/IconArrowCurve";
import { fixTypography } from "@/lib/util/fixTypography";
import { useLinkHover } from "@/hooks/animation/useLinkHover";
import { ERROR_ANIMATION } from "@/constants/animation";
import { useRefreshOnResize } from "@/hooks/useRefreshOnResize";

// #endregion ===========================

export default function ErrorClient({ uiString, lang }: Props) {
	const refTitle = React.useRef<HTMLHeadingElement>(null);
	const { play: playTitle } = useLinkHover(refTitle);

	useRefreshOnResize();

	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString)?.error404 ?? {};

	const classesMain = `${css.container} ${fontSerif.variable} ${fontMono.variable} ${fontDisplay.variable}`;

	return (
		<main className={classesMain}>
			<DotsBg saturation={60} yPosition={10} />
			<DotsBg saturation={60} yPosition={90} />

			<div className={css.content}>
				{/* emblem */}
				<motion.div
					className={css.container_emblem}
					variants={ERROR_ANIMATION.emblem}
					initial="initial"
					animate="animate"
				>
					<Emblem size={28} />
				</motion.div>

				{/* text */}
				<div className={css.container_text}>
					<motion.div
						className={css.container_icon}
						variants={ERROR_ANIMATION.icons}
						initial="initial"
						animate="animate"
					>
						<IconArrowShortCut direction="up" size={8} />
						<IconArrowShortCut direction="up" size={8} />
					</motion.div>
					<motion.h1
						ref={refTitle}
						className={`${css.title} f_serif_primary f_capital`}
						variants={ERROR_ANIMATION.title}
						initial="initial"
						animate="animate"
						onAnimationComplete={playTitle}
					>
						{ui?.title}
					</motion.h1>
					<motion.p
						className={`${css.description} f_display_body`}
						variants={ERROR_ANIMATION.subtitle}
						initial="initial"
						animate="animate"
					>
						{fixTypography(ui?.description)}
					</motion.p>
				</div>

				{/* button */}
				<motion.div
					className={css.container_button}
					variants={ERROR_ANIMATION.button}
					initial="initial"
					animate="animate"
				>
					<ButtonPrimary
						href={`/${lang}`}
						// isErrorPage={true}
						isExternal={false}
						icon={<IconArrowCurve color="black" direction="right" />}
					>
						{ui?.buttonTitle}
					</ButtonPrimary>
				</motion.div>
			</div>
		</main>
	);
}

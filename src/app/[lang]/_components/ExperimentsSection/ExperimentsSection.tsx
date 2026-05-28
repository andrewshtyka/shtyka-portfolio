"use client";

// #region ============================== Imports

// animation
import { motion, useInView, useScroll, useTransform } from "motion/react";

// components
import Card from "./Card/Card";
import DotsBg from "@/components/DotsBg/DotsBg";

// constants
import { HOME_SECTIONS } from "@/constants/sectionNames";
import { SECTION_EXPERIMENTS_ANIMATION } from "@/constants/animation";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// styles
import IconAsterisk from "@/components/Icons/IconAsterisk/IconAsterisk";
import css from "./ExperimentsSection.module.css";

// types
import { Element, Props } from "./ExperimentsSection.types";

// utility
import React from "react";

// #endregion ===========================

export default function ExperimentsSection({
	experimentsString,
	uiString,
}: Props) {
	// animation - icons
	const refContainer = React.useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: refContainer,
		offset: ["start end", "25% 90%"],
	});

	const xValue = useTransform(scrollYProgress, [0, 1], ["24px", "0px"]);
	const negativeX = useTransform(xValue, (val: string) => {
		const num = parseFloat(val);
		return `${-num}px`;
	});

	if (!experimentsString || typeof experimentsString !== "string") return;
	if (!uiString || typeof uiString !== "string") return;

	const experiments = JSON.parse(experimentsString).reverse();
	const ui = JSON.parse(uiString);

	const processedExperiments = experiments.map((item: Element) => {
		return {
			data: { ...item },
			key: item._key,
		};
	});

	return (
		<section id={HOME_SECTIONS.experiments} className={css.container}>
			<DotsBg />

			<div ref={refContainer} className={css.content}>
				{/* title */}
				<>
					<motion.h2
						className={`${css.title} f_serif_primary`}
						variants={SECTION_EXPERIMENTS_ANIMATION.title}
						initial="initial"
						whileInView="animate"
						transition={SECTION_EXPERIMENTS_ANIMATION.title.transition}
						viewport={SECTION_EXPERIMENTS_ANIMATION.title.viewport}
					>
						{ui[0]?.children?.map(
							({ _key, text }: { _key: string; text: string }, i: number) => {
								if (i === 1) {
									const textStart = text.slice(0, 4);
									const textLetter = text.slice(4, 5);
									const textEnd = text.slice(5);

									return (
										<span key={_key} className="f_italic">
											{textStart}
											<span className={css.title_letter}>{textLetter}</span>
											{textEnd}
										</span>
									);
								}

								return <motion.span key={_key}>{text}</motion.span>;
							}
						)}
					</motion.h2>
					<motion.p
						className={`${css.subtitle} f_mono`}
						variants={SECTION_EXPERIMENTS_ANIMATION.title}
						initial="initial"
						whileInView="animate"
						transition={SECTION_EXPERIMENTS_ANIMATION.title.transition}
						viewport={SECTION_EXPERIMENTS_ANIMATION.title.viewport}
					>
						{ui[1]?.children[0]?.text ?? ""}
					</motion.p>
					<motion.div className={css.icons}>
						<motion.span
							style={{
								x: negativeX,
							}}
						>
							<IconAsterisk size={10} />
						</motion.span>
						<motion.span
							style={{
								x: xValue,
							}}
						>
							<IconAsterisk size={10} />
						</motion.span>
					</motion.div>
				</>

				{/* content */}
				<motion.ul
					className={css.grid}
					variants={SECTION_EXPERIMENTS_ANIMATION.list}
					initial="hidden"
					whileInView="visible"
					viewport={SECTION_EXPERIMENTS_ANIMATION.list.viewport}
				>
					{processedExperiments.map(
						({ key, data }: { key: string; data: unknown }) => (
							<Card key={key} data={data} />
						)
					)}
				</motion.ul>
			</div>
		</section>
	);
}

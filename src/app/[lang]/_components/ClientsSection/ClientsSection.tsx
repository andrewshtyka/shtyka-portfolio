"use client";

// animation
import { motion, useInView } from "motion/react";

// constants
import { SECTION_CLIENTS_ANIMATION } from "@/constants/animation";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// styles
import ListItem from "@/components/ListItem/ListItem";
import css from "./ClientsSection.module.css";

// types
import { Element, Props } from "./ClientsSection.types";

// utility
import React from "react";

export default function ClientsSection({ uiString }: Props) {
	const refTitle_1 = React.useRef<HTMLSpanElement>(null);
	const refTitle_2 = React.useRef<HTMLSpanElement>(null);
	const isTitle_1_InView = useInView(refTitle_1, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const isTitle_2_InView = useInView(refTitle_2, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const { play: playTitle_1 } = useLinkHover(refTitle_1);
	const { play: playTitle_2 } = useLinkHover(refTitle_2, true, 1);

	React.useEffect(() => {
		if (isTitle_1_InView) playTitle_1?.();
	}, [isTitle_1_InView, playTitle_1]);

	React.useEffect(() => {
		if (isTitle_2_InView) playTitle_2?.();
	}, [isTitle_2_InView, playTitle_2]);

	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);

	const dataTitle = {
		title_1: ui?.[0].children[0]?.text ?? "",
		title_2: ui?.[1].children[0]?.text ?? "",
	};

	const dataClients = ui?.slice(2)?.map((item: Element) => {
		return {
			key: item?._key ?? "",
			text: item?.children[0]?.text ?? "",
		};
	});

	return (
		<section className={css.container}>
			<h2 className={css.h2}>
				<motion.span
					ref={refTitle_1}
					className={`${css.title_1} f_serif_secondary`}
					variants={SECTION_CLIENTS_ANIMATION.title}
					initial="initial"
					whileInView="animate"
					viewport={SECTION_CLIENTS_ANIMATION.title.viewport}
				>
					{dataTitle?.title_1}
				</motion.span>
				<motion.span
					ref={refTitle_2}
					className={`${css.title_2} f_serif_secondary f_italic`}
					variants={SECTION_CLIENTS_ANIMATION.title}
					initial="initial"
					whileInView="animate"
					viewport={SECTION_CLIENTS_ANIMATION.title.viewport}
				>
					{dataTitle?.title_2}
				</motion.span>
			</h2>

			<motion.ul
				className={css.list}
				variants={SECTION_CLIENTS_ANIMATION.list}
				initial="hidden"
				whileInView="visible"
				viewport={SECTION_CLIENTS_ANIMATION.list.viewport}
			>
				{dataClients?.map(({ key, text }: { key: string; text: string }) => (
					<ListItem key={key}>{text}</ListItem>
				))}
			</motion.ul>
		</section>
	);
}

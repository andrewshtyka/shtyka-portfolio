"use client";

// animation
import { motion, useInView } from "motion/react";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// styles
import css from "./FooterClient.module.css";

// types
import { Props } from "./FooterClient.types";

// utility
import React from "react";
import Divider from "@/components/Divider/Divider";
import Dimensions from "../Dimensions/Dimensions";
import Emblem from "@/components/Icons/Emblem/Emblem";
import { SECTION_FOOTER_ANIMATION } from "@/constants/animation";

export default function FooterClient({
	ui,
	lastUpdate,
	browserName,
	currentYear,
}: Props) {
	// animation - titles
	const refTitle_1 = React.useRef<HTMLHeadingElement>(null);
	const refTitle_2 = React.useRef<HTMLHeadingElement>(null);
	const refTitle_3 = React.useRef<HTMLHeadingElement>(null);
	const refTitle_4 = React.useRef<HTMLHeadingElement>(null);

	const isTitle_1_InView = useInView(refTitle_1, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const isTitle_2_InView = useInView(refTitle_2, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const isTitle_3_InView = useInView(refTitle_3, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});
	const isTitle_4_InView = useInView(refTitle_4, {
		once: true,
		margin: "-24px 0px -24px 0px",
	});

	const { play: playTitle_1 } = useLinkHover(refTitle_1);
	const { play: playTitle_2 } = useLinkHover(refTitle_2);
	const { play: playTitle_3 } = useLinkHover(refTitle_3);
	const { play: playTitle_4 } = useLinkHover(refTitle_4);

	React.useEffect(() => {
		if (isTitle_1_InView) playTitle_1?.();
	}, [isTitle_1_InView, playTitle_1]);

	React.useEffect(() => {
		if (isTitle_2_InView) playTitle_2?.();
	}, [isTitle_2_InView, playTitle_2]);

	React.useEffect(() => {
		if (isTitle_3_InView) playTitle_3?.();
	}, [isTitle_3_InView, playTitle_3]);

	React.useEffect(() => {
		if (isTitle_4_InView) playTitle_4?.();
	}, [isTitle_4_InView, playTitle_4]);

	return (
		<>
			{/* divider */}
			<motion.div
				variants={SECTION_FOOTER_ANIMATION.divider}
				initial="initial"
				whileInView="animate"
				transition={SECTION_FOOTER_ANIMATION.divider.transition}
				viewport={SECTION_FOOTER_ANIMATION.divider.viewport}
			>
				<Divider isHorizontal={true} willHide={false} />
			</motion.div>

			{/* top */}
			<ul className={css.list_top}>
				{/* update */}

				<li className={css.list_top_item_1}>
					<motion.h4
						ref={refTitle_1}
						className={`${css.title} f_mono`}
						variants={SECTION_FOOTER_ANIMATION.title}
						initial="initial"
						whileInView="animate"
						viewport={SECTION_FOOTER_ANIMATION.title.viewport}
					>
						{ui?.item1}
					</motion.h4>
					<motion.p
						className="f_display_caption"
						variants={SECTION_FOOTER_ANIMATION.listItem}
						initial="hidden"
						whileInView="visible"
						viewport={SECTION_FOOTER_ANIMATION.listItem.viewport}
					>
						{lastUpdate}
					</motion.p>
				</li>

				{/* browser */}
				<li className={css.list_top_item_2}>
					<motion.h4
						ref={refTitle_2}
						className={`${css.title} f_mono`}
						variants={SECTION_FOOTER_ANIMATION.title}
						initial="initial"
						whileInView="animate"
						viewport={SECTION_FOOTER_ANIMATION.title.viewport}
					>
						{ui?.item2}
					</motion.h4>
					<motion.p
						className="f_display_caption"
						variants={SECTION_FOOTER_ANIMATION.listItem}
						initial="hidden"
						whileInView="visible"
						viewport={SECTION_FOOTER_ANIMATION.listItem.viewport}
					>
						{browserName}
					</motion.p>
				</li>

				{/* dimensions */}
				<li className={css.list_top_item_3}>
					<motion.h4
						ref={refTitle_3}
						className={`${css.title} f_mono`}
						variants={SECTION_FOOTER_ANIMATION.title}
						initial="initial"
						whileInView="animate"
						viewport={SECTION_FOOTER_ANIMATION.title.viewport}
					>
						{ui?.item3}
					</motion.h4>
					<motion.p
						className="f_display_caption"
						variants={SECTION_FOOTER_ANIMATION.listItem}
						initial="hidden"
						whileInView="visible"
						viewport={SECTION_FOOTER_ANIMATION.listItem.viewport}
					>
						<Dimensions />
					</motion.p>
				</li>

				{/* made in */}
				<li className={css.list_top_item_4}>
					<motion.h4
						ref={refTitle_4}
						className={`${css.title} f_mono`}
						variants={SECTION_FOOTER_ANIMATION.title}
						initial="initial"
						whileInView="animate"
						viewport={SECTION_FOOTER_ANIMATION.title.viewport}
					>
						{ui?.item4?.title}
					</motion.h4>
					<motion.p
						className="f_display_caption"
						variants={SECTION_FOOTER_ANIMATION.listItem}
						initial="hidden"
						whileInView="visible"
						viewport={SECTION_FOOTER_ANIMATION.listItem.viewport}
					>
						{ui?.item4?.content}
					</motion.p>
				</li>
			</ul>

			{/* divider */}
			<motion.div
				variants={SECTION_FOOTER_ANIMATION.divider}
				initial="initial"
				whileInView="animate"
				transition={SECTION_FOOTER_ANIMATION.divider.transition}
				viewport={SECTION_FOOTER_ANIMATION.divider.viewport}
			>
				<Divider isHorizontal={true} willHide={false} />
			</motion.div>

			{/* bottom */}
			<motion.ul
				className={css.list_bottom}
				variants={SECTION_FOOTER_ANIMATION.listItem}
				initial="hidden"
				whileInView="visible"
				viewport={SECTION_FOOTER_ANIMATION.listItem.viewport}
			>
				<li className={css.list_bottom_item_1}>
					<span className={`${css.title} f_mono`}>{ui?.item5}</span>
				</li>

				<li className={css.list_bottom_item_2}>
					<span className={css.mobile_only}>
						<Emblem color="gray" size={30} />
					</span>
					<span className={css.desktop_only}>
						<Emblem color="gray" size={20} />
					</span>
				</li>

				<li className={css.list_bottom_item_3}>
					<span className={`${css.title} f_mono`}>
						{currentYear} • {ui?.item6}
					</span>
				</li>
			</motion.ul>
		</>
	);
}

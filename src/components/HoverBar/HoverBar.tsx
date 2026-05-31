"use client";

// #region ============================== Imports

// animation
import { hover, motion } from "motion/react";

// components
import IconArrowCurve from "../Icons/IconArrowCurve/IconArrowCurve";

// constants

// hooks
import useFollowCursor from "@/hooks/animation/useFollowCursor";

// providers / context

// styles
import css from "./HoverBar.module.css";

// types
import { Props } from "./HoverBar.types";

// utility
import React from "react";

// #endregion ===========================

export default function HoverBar({
	refTarget,
	title,
	from = "left",
	shape = "rectangle",
}: Props) {
	// 1. config
	const [isVisibleHover, setIsVisibleHover] = React.useState(false);
	const refHoverBar = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (!refTarget) return;
		return hover(refTarget.current, () => {
			setIsVisibleHover(true);
			return () => setIsVisibleHover(false);
		});
	}, [refTarget]);
	useFollowCursor(refHoverBar, refTarget, shape);

	// 2. animate from (direction)
	let pathConfig;
	if (from === "left") pathConfig = "0% 100% 0% 0%";
	else if (from === "left top") pathConfig = "0% 100% 100% 0%";

	// 3. shape
	let shapeClass;
	if (shape === "rectangle") shapeClass = `${css.rectangle}`;
	else if (shape === "circle") shapeClass = `${css.circle}`;

	// 4. icon visibility
	let isIconVisible;
	if (shape === "rectangle") isIconVisible = true;
	else if (shape === "circle") isIconVisible = false;

	const classesApplied = `${shapeClass} ${css.container} f_display_buttons`;

	return (
		<span className={css.is_mob_hidden}>
			<motion.div
				ref={refHoverBar}
				className={classesApplied}
				initial={{
					clipPath: `inset(${pathConfig} round var(--border-radius-main))`,
				}}
				animate={{
					clipPath: isVisibleHover
						? "inset(0% 0% 0% 0% round var(--border-radius-main)"
						: `inset(${pathConfig} round var(--border-radius-main)`,
				}}
				transition={{ duration: 0.3, ease: "easeOut" }}
			>
				{title}
				{isIconVisible && (
					<div className={css.container_hover_icon}>
						<IconArrowCurve color="black" direction="right" />
					</div>
				)}
			</motion.div>
		</span>
	);
}

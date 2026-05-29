"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components

// constants
import { SECTION_PROJECTS_ANIMATION } from "@/constants/animation";

// hooks

// styles
import css from "./Solution.module.css";

// types
import { Props } from "./Solution.types";

// utility
import React from "react";

// #endregion ===========================

export default function Solution({ text = "" }: Props) {
	return (
		<motion.li
			className={css.container}
			variants={SECTION_PROJECTS_ANIMATION.project.listItem}
			initial="hidden"
			whileInView="visible"
			viewport={SECTION_PROJECTS_ANIMATION.project.listItem.viewport}
		>
			<p className="f_display_body">{text}</p>
		</motion.li>
	);
}

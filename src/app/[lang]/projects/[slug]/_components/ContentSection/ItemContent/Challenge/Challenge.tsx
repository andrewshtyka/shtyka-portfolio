"use client";

// #region ============================== Imports

// animation

// components
import IconAsterisk from "@/components/Icons/IconAsterisk/IconAsterisk";

// constants

// hooks

// styles
import css from "./Challenge.module.css";

// types
import { Props } from "./Challenge.types";

// utility
import React from "react";

// #endregion ===========================

export default function Challenge({
	label,
	currentNum,
	totalNum,
	text,
}: Props) {
	return (
		<article className={css.container}>
			<div className={`${css.grid} ${css.top}`}>
				<span className={`f_mono`}>{label}</span>
				<span className={`${css.nums} f_mono`}>
					{currentNum} / {totalNum}
				</span>
			</div>

			<div className={`${css.grid}`}>
				<div>
					<IconAsterisk size={8} color="gray" />
					<IconAsterisk size={8} color="gray" />
				</div>

				<p className={`${css.text} f_display_body`}>{text}</p>
			</div>
		</article>
	);
}

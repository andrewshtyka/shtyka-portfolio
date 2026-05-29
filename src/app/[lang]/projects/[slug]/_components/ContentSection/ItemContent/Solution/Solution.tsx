"use client";

// #region ============================== Imports

// animation

// components

// constants

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
		<li className={css.container}>
			<p className="f_display_body">{text}</p>
		</li>
	);
}

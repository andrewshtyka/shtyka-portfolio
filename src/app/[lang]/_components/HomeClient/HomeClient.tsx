"use client";

// #region ============================== Imports

// animation

// components

// constants

// hooks

// providers / context
import { HoverLineContext } from "@/providers/HoverLineProvider/HoverLineProvider";

// styles
// import css from '.'

// types
import { Props } from "./HomeClient.types";

// utility
import React from "react";

// #endregion ===========================

export default function HomeClient({ children }: Props) {
	// hero - infinite line
	const { setIsVisibleHover } = React.useContext(HoverLineContext);

	return (
		<div
			onMouseEnter={() => setIsVisibleHover(false)}
			onMouseLeave={() => setIsVisibleHover(true)}
		>
			{children}
		</div>
	);
}

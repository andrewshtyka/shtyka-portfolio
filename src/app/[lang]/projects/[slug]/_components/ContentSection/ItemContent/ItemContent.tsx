"use client";

import Challenge from "./Challenge/Challenge";
// #region ============================== Imports

// animation

// components

// constants

// hooks

// styles
import css from "./ItemContent.module.css";

// types
import { Props } from "./ItemContent.types";

// utility
import React from "react";
import Solution from "./Solution/Solution";
import Media from "./Media/Media";

// #endregion ===========================

export default function ItemContent({
	ui,
	currentNum,
	totalNum,
	label,
}: Props) {
	if (!Array.isArray(ui)) return null;

	const CHALLENGE =
		ui?.filter((item) => item?._type === "challenge")[0]?.challenge ?? "";

	const CONTENT = ui?.filter(
		(item) => item?._type === "solution" || item?._type === "media"
	);

	return (
		<li>
			<Challenge
				label={label}
				currentNum={currentNum}
				totalNum={totalNum}
				text={CHALLENGE}
			/>

			<ul>
				{CONTENT?.map((item) => {
					if (item._type === "solution") {
						return <Solution key={item?._key} text={item?.solution} />;
					}

					if (item._type === "media") {
						return <Media key={item?._key} items={item?.items} />;
					}
				})}
			</ul>
		</li>
	);
}

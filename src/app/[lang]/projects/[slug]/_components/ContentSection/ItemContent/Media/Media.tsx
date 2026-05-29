"use client";

// #region ============================== Imports

// animation

// components
import MediaComponent from "@/components/MediaComponent/MediaComponent";

// constants

// hooks

// styles
import css from "./Media.module.css";

// types
import { Props } from "./Media.types";

// utility
import React from "react";
import { getStylesProjects } from "@/lib/util/getStylesProjects";

// #endregion ===========================

export default function Media({ items }: Props) {
	if (!Array.isArray(items)) return null;

	return (
		<li className={css.container}>
			<ul className={css.grid}>
				{items?.map((item) => {
					const uiString = JSON.stringify(item);
					return (
						<li
							style={getStylesProjects(item?.cardWidth)}
							key={item._key}
							className={css.list}
						>
							<div className={css.container_media}>
								<MediaComponent
									uiString={uiString}
									hasTop={false}
									hasBottom={false}
								/>
							</div>
						</li>
					);
				})}
			</ul>
		</li>
	);
}

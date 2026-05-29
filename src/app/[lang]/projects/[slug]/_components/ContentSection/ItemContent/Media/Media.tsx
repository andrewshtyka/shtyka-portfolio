"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import MediaComponent from "@/components/MediaComponent/MediaComponent";

// constants
import { SECTION_PROJECTS_ANIMATION } from "@/constants/animation";

// hooks

// styles
import css from "./Media.module.css";

// types
import { Props } from "./Media.types";

// utility
import React from "react";
import { getStylesProjects } from "@/lib/util/getStyles";

// #endregion ===========================

export default function Media({ items }: Props) {
	if (!Array.isArray(items)) return null;

	return (
		<li className={css.container}>
			<ul className={css.grid}>
				{items?.map((item) => {
					const uiString = JSON.stringify(item);
					return (
						<motion.li
							style={getStylesProjects(item?.cardWidth)}
							key={item._key}
							className={css.list}
							variants={SECTION_PROJECTS_ANIMATION.project.listItem}
							initial="hidden"
							whileInView="visible"
							viewport={{
								...SECTION_PROJECTS_ANIMATION.project.listItem.viewport,
								amount: 0.15,
							}}
						>
							<div className={css.container_media}>
								<MediaComponent
									uiString={uiString}
									hasTop={false}
									hasBottom={false}
								/>
							</div>
						</motion.li>
					);
				})}
			</ul>
		</li>
	);
}

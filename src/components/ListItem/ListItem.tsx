"use client";

// animation
import { motion } from "motion/react";

// components
import IconAsterisk from "../Icons/IconAsterisk/IconAsterisk";

// styles
import css from "./ListItem.module.css";

// types
import { Props } from "./ListItem.types";

export default function ListItem({
	children,
	hasIcon = true,
	variants = {},
	viewport = {},
}: Props) {
	return (
		<motion.li className={css.item} variants={variants} viewport={viewport}>
			{hasIcon && (
				<span className={css.container_icon}>
					<IconAsterisk color="gray" size={8} />
				</span>
			)}
			<span className="f_mono">{children}</span>
		</motion.li>
	);
}

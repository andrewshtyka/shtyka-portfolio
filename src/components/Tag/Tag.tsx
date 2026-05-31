"use client";

// components
import Magnetic from "../Magnetic/Magnetic";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";
import { useBlur } from "@/hooks/useBlur";

// providers / context
import { HoverLineContext } from "@/providers/HoverLineProvider/HoverLineProvider";

// styles
import css from "./Tag.module.css";

// types
import { Props } from "./Tag.types";

// utility
import React from "react";

export default function Tag({ children = "", href }: Props) {
	const ref = React.useRef<HTMLAnchorElement>(null);
	const { play } = useLinkHover(ref);

	useBlur();

	if (!href) return null;

	return (
		<Magnetic>
			<a
				href={href}
				className={`${css.link} f_mono`}
				target="_blank"
				rel="noopener noreferrer"
				onMouseEnter={() => {
					play?.();
				}}
				onFocus={play}
			>
				<span ref={ref}>{children}</span>
			</a>
		</Magnetic>
	);
}

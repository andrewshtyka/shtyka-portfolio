"use client";

// components
import Link from "next/link";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";

// styles
import css from "./ButtonPrimary.module.css";

// types
import { Props } from "./ButtonPrimary.types";

// utility
import React from "react";

export default function ButtonPrimary({
	href,
	children = "",
	icon,
	fileName = "",
	isExternal = true,
}: Props) {
	const classesLink = `f_display_buttons ${css.button} `;
	const classesChildren = `${css.children} ${css.space_between}`;

	const ref = React.useRef<HTMLAnchorElement>(null);
	const { play } = useLinkHover(ref);

	if (!href) return null;

	if (isExternal) {
		const appliedHref = fileName ? `${href}/${fileName}` : `${href}`;
		return (
			<a
				href={appliedHref}
				className={classesLink}
				target="_blank"
				rel="noopener noreferrer"
				onMouseEnter={play}
				onFocus={play}
			>
				<span className={classesChildren}>
					<span ref={ref}>{children}</span>
					{icon && icon}
				</span>
			</a>
		);
	}

	if (!isExternal) {
		return (
			<Link
				href={href}
				className={classesLink}
				onMouseEnter={play}
				onFocus={play}
			>
				<span className={classesChildren}>
					<span ref={ref}>{children}</span>
					{icon && icon}
				</span>
			</Link>
		);
	}
}

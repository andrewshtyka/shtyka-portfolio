"use client";

// #region ============================== Imports

// components
import Link from "next/link";
import Magnetic from "../Magnetic/Magnetic";

// hooks
import { useLinkHover } from "@/hooks/animation/useLinkHover";
import { useIconHover } from "@/hooks/animation/useIconHover";
import { useBlur } from "@/hooks/useBlur";

// providers / context

// styles
import css from "./ButtonPrimary.module.css";

// types
import { Props } from "./ButtonPrimary.types";

// utility
import React from "react";

// #endregion ===========================

export default function ButtonPrimary({
	href,
	children = "",
	icon,
	fileName = "",
	isExternal = true,
}: Props) {
	const classesLink = `f_display_buttons ${css.button} `;
	const classesChildren = `${css.children} ${css.space_between}`;

	// text animation
	const ref = React.useRef<HTMLAnchorElement>(null);
	const { play } = useLinkHover(ref);

	// icon animation
	const refIcon = React.useRef<HTMLAnchorElement>(null);
	const refIconContainer = React.useRef<HTMLAnchorElement>(null);
	const { play: playIcon } = useIconHover(refIcon, refIconContainer);

	useBlur();

	if (!href) return null;

	if (isExternal) {
		const appliedHref = fileName ? `${href}/${fileName}` : `${href}`;
		return (
			<Magnetic>
				<a
					href={appliedHref}
					className={classesLink}
					target="_blank"
					rel="noopener noreferrer"
					onMouseEnter={() => {
						play?.();
						playIcon?.();
					}}
					onFocus={() => {
						play?.();
						playIcon?.();
					}}
				>
					<span className={classesChildren}>
						<span ref={ref}>{children}</span>
						<span ref={refIconContainer} className={css.container_icon}>
							<span ref={refIcon} className={css.icon}>
								{icon && icon}
							</span>
						</span>
					</span>
				</a>
			</Magnetic>
		);
	}

	if (!isExternal) {
		return (
			<Magnetic>
				<Link
					href={href}
					className={classesLink}
					onMouseEnter={() => {
						play?.();
						playIcon?.();
					}}
					onFocus={() => {
						play?.();
						playIcon?.();
					}}
				>
					<span className={classesChildren}>
						<span ref={ref}>{children}</span>
						<span ref={refIconContainer} className={css.container_icon}>
							<span ref={refIcon} className={css.icon}>
								{icon && icon}
							</span>
						</span>
					</span>
				</Link>
			</Magnetic>
		);
	}
}

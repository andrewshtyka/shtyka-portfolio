// #region ============================== Imports

// components
import Link from "next/link";

// styles
import css from "./MenuLinkPrimary.module.css";

// types
import { PropsPrimary, PropsSecondary } from "./MenuLinkPrimary.types";

// #endregion ===========================

export function MenuLinkPrimary({
	children = "",
	isTransparent = false,
	isActive,
	onClick = undefined,
}: PropsPrimary) {
	const isActiveSectionClass = isActive ? `${css.is_active}` : " ";

	const transparencyClass = isTransparent
		? `${css.transparent}`
		: `${css.solid}`;

	const classes = `${css.base} ${transparencyClass} ${isActiveSectionClass}`;

	return (
		<button
			type="button"
			className={`f_display_buttons f_semibold ${classes}`}
			onClick={onClick}
		>
			<span className={css.children}>{children}</span>
		</button>
	);
}

export function MenuLinkSecondary({
	children = "",
	href,
	isTransparent = false,
	scroll = true,
	isActive,
	onClick = undefined,
}: PropsSecondary) {
	const isActiveSectionClass = isActive ? `${css.is_active}` : " ";

	const transparencyClass = isTransparent
		? `${css.transparent}`
		: `${css.solid}`;

	const classes = `${css.base} ${transparencyClass} ${isActiveSectionClass}`;

	if (!href) return null;

	return (
		<Link
			href={href}
			className={`f_display_buttons f_semibold ${classes}`}
			scroll={scroll}
			onClick={onClick}
		>
			<span className={css.children}>{children}</span>
		</Link>
	);
}

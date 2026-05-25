// #region ============================== Imports

// components
import Link from "next/link";
import IconArrowShortCut from "../Icons/IconArrowShortCut/IconArrowShortCut";

// styles
import css from "./MenuLinkPrimary.module.css";

// types
import { Props } from "./MenuLinkPrimary.types";
import IconAsterisk from "../Icons/IconAsterisk/IconAsterisk";

// #endregion ===========================

export default function MenuLinkPrimary({
	children = "",
	href,
	isTransparent = false,
	scroll = true,
	isActive,
	onClick = undefined,
}: Props) {
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

// components
import Link from "next/link";

// styles
import css from "./MenuLinkPrimary.module.css";

// types
import { Props } from "./MenuLinkPrimary.types";

export default function MenuLinkPrimary({
	children,
	href,
	isTransparent = false,
}: Props) {
	const transparencyClass = isTransparent
		? `${css.transparent}`
		: `${css.solid}`;

	const classes = `${css.base} ${transparencyClass}`;

	if (!href || !children) return null;
	else {
		return (
			<Link href={href} className={`f_display_buttons f_semibold ${classes}`}>
				<span className={css.children}>{children}</span>
			</Link>
		);
	}
}

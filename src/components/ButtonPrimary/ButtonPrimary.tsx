// components
import Link from "next/link";

// styles
import css from "./ButtonPrimary.module.css";

// types
import { Props } from "./ButtonPrimary.types";

export default function ButtonPrimary({
	children = "",
	href,
	icon,
	fileName = "",
	isExternal = true,
}: Props) {
	const classesLink = `f_display_buttons ${css.button} `;
	const classesChildren = `${css.children} ${css.space_between}`;

	if (!href) return null;
	if (isExternal) {
		const appliedHref = fileName ? `${href}/${fileName}` : `${href}`;
		return (
			<a
				href={appliedHref}
				className={classesLink}
				target="_blank"
				rel="noopener noreferrer"
			>
				<span className={classesChildren}>
					{children}
					{icon && icon}
				</span>
			</a>
		);
	} else {
		return (
			<Link href={href} className={classesLink}>
				<span className={classesChildren}>
					{children}
					{icon && icon}
				</span>
			</Link>
		);
	}
}

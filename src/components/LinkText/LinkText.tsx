// #region ============================== Imports
// styles
import Link from "next/link";
import css from "./LinkText.module.css";

// types
import { Props } from "./LinkText.types";
import { span } from "motion/react-client";
// #endregion ===========================

export default function LinkText({ type = "link", href, children }: Props) {
	if (type === "link") {
		return (
			<a href={href} className={css.link}>
				{children}
			</a>
		);
	} else if (type === "tooltip") {
		return <span className={css.link}>{children}</span>;
	} else return null;
}

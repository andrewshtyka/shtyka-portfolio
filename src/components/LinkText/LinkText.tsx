// #region ============================== Imports
// styles
import css from "./LinkText.module.css";

// types
import { Props } from "./LinkText.types";
// #endregion ===========================

export default function LinkText({ href, children = "" }: Props) {
	if (!href) return null;

	return (
		<a
			href={href}
			className={css.link}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}

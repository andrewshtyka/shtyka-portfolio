// #region ============================== Imports
// styles
import css from "./LinkText.module.css";

// types
import { Props } from "./LinkText.types";
// #endregion ===========================

export default function LinkText({ href, children = "" }: Props) {
	return (
		<a href={href} className={css.link}>
			{children}
		</a>
	);
}

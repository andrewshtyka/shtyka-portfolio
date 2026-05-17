// styles
import css from "./Desktop.module.css";

// types
import { Props } from "./Desktop.types";

export default function Desktop({ children }: Props) {
	const classes = `mob_hidden_768 ${css.container} `;

	return <div className={classes}>{children}</div>;
}

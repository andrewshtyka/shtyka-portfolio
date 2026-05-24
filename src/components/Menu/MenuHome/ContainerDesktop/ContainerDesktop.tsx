// styles
import css from "./ContainerDesktop.module.css";

// types
import { Props } from "./ContainerDesktop.types";

export default function ContainerDesktop({ children }: Props) {
	const classes = `mob_hidden_768 ${css.container} `;

	return <div className={classes}>{children}</div>;
}

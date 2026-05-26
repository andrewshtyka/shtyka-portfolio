// styles
import css from "./ContainerDesktop.module.css";

// types
import { Props } from "./ContainerDesktop.types";

export default function ContainerDesktop({ children }: Props) {
	const classes = `${css.container} ${css.mob_hidden}`;

	return <div className={classes}>{children}</div>;
}

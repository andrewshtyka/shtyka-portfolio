// styles
import css from "./Desktop.module.css";

// types
import { Props } from "./Desktop.types";

export default function Desktop({ children }: Props) {
	return <div className={css.container}>{children}</div>;
}

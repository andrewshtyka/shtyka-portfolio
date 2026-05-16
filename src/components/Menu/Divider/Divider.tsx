// styles
import css from "./Divider.module.css";

// types
import { Props } from "./Divider.types";

export default function Divider({ isHiddenOnMobile = false }: Props) {
	const visibilityClass = isHiddenOnMobile ? "mob_hidden" : "";
	const classes = `${css.container} ${visibilityClass}`;

	return (
		<div className={classes}>
			<div className={css.line} />
		</div>
	);
}

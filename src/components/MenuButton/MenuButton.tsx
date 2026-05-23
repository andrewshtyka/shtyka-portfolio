// styles
import css from "./MenuButton.module.css";

// styles
import { Props } from "./MenuButton.types";

export default function MenuButton({
	onClick = undefined,
	children = "",
	customClass = "",
}: Props) {
	const classes = `${css.button} ${customClass}`;

	return (
		<button
			type="button"
			className={`f_display_buttons f_semibold ${classes}`}
			onClick={onClick}
		>
			<span className={css.children}>{children}</span>
		</button>
	);
}

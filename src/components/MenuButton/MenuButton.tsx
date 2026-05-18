// styles
import css from "./MenuButton.module.css";

// styles
import { Props } from "./MenuButton.types";

export default function MenuButton({
	onClick,
	children,
	customClass = "",
}: Props) {
	const classes = `${css.base} ${customClass}`;

	// TODO
	// Opened menu mob = replace 'Menu' with 'Close'
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

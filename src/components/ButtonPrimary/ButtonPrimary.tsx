// styles
import css from "./ButtonPrimary.module.css";

// types
import { Props } from "./ButtonPrimary.types";

export default function ButtonPrimary({ children, href, icon, fileName }: Props) {
	const classes = `f_display_buttons ${css.button} `;

	const classesChildren = `${css.children} ${css.space_between}`;

	return (
		<a href={`${href}/${fileName}`} className={classes}>
			<span className={classesChildren}>
				{children}
				{icon}
			</span>
		</a>
	);
}

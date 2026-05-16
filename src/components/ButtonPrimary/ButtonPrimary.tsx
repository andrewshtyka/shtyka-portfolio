// styles
import css from "./ButtonPrimary.module.css";

// types
import { Props } from "./ButtonPrimary.types";

export default function ButtonPrimary({ children, href }: Props) {
	return (
		<a href={href} className="f_display_buttons">
			{children}
		</a>
	);
}

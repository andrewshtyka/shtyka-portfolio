// styles
import css from "./Tag.module.css";

// types
import { Props } from "./Tag.types";

export default function Tag({ children = "", href }: Props) {
	if (!href) return null;

	return (
		<a
			href={href}
			className={`${css.link} f_mono`}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}

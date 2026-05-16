// styles
import css from "./Tag.module.css";

// types
import { Props } from "./Tag.types";

export default function Tag({ children, href }: Props) {
	return (
		<span className={css.container}>
			<a href={href} className="f_mono">
				{children}
			</a>
		</span>
	);
}

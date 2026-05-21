// components
import Link from "next/link";

// styles
import css from "./ButtonSecondary.module.css";

// types
import { Props } from "./ButtonSecondary.types";

export default function ButtonSecondary({ children = "", href, icon }: Props) {
	const classesLink = `f_display_buttons ${css.button} `;
	const classesItems = `${css.items} ${css.space_between}`;

	if (!href) return null;

	const hiddenLetter = children && children[0];

	return (
		<a
			href={href}
			className={classesLink}
			target="_blank"
			rel="noopener noreferrer"
		>
			<span className={classesItems}>
				<span className={css.text}>{children}</span>

				{icon && (
					<span>
						<span className={css.icon}>{icon}</span>
						<span className={css.hidden_letter}>{hiddenLetter}</span>
					</span>
				)}
			</span>
		</a>
	);
}

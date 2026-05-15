// styles
import css from "./Navigation.module.css";

// types
import { Props } from "./Navigation.types";

export default function Navigation({ menuItems }: Props) {
	return (
		<nav>
			<ul className={css.list_container}>
				{menuItems.map(({ item, id }) => (
					<li key={id}>
						{/* TO DO
							Pass here id of section, that will be scrolled to
							*/}
						<a href="#" className="f_display f_semibold">
							{item}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

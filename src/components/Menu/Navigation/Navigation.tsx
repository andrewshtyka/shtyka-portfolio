import { Props } from "./Navigation.types";

export default function Navigation({ menuItems }: Props) {
	return (
		<nav>
			<ol>
				{menuItems.map(({ item, id }) => (
					<li key={id}>
						{/* TO DO
							Pass here id of section, that will be scrolled to
							*/}
						<a href="#">{item}</a>
					</li>
				))}
			</ol>
		</nav>
	);
}

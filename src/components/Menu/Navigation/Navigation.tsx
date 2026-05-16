// styles
import MenuLinkPrimary from "@/components/MenuLinkPrimary/MenuLinkPrimary";
import css from "./Navigation.module.css";

// types
import { Props } from "./Navigation.types";

export default function Navigation({ menuItems }: Props) {
	return (
		<nav className={css.nav}>
			<ul className={css.list_container}>
				{menuItems.map(({ item, id }) => (
					<li key={id} className={css.list_item}>
						{/* TODO
							Pass here id of section, that will be scrolled to
							*/}
						<MenuLinkPrimary href="#">{item}</MenuLinkPrimary>
					</li>
				))}
			</ul>
		</nav>
	);
}

// styles
import MenuLinkPrimary from "@/components/MenuLinkPrimary/MenuLinkPrimary";
import css from "./Navigation.module.css";

// types
import { Props } from "./Navigation.types";

export default function Navigation({ menuItems, lang }: Props) {
	if (!menuItems) return null;

	return (
		<nav className={css.nav}>
			<ul className={css.list_container}>
				{menuItems.map(({ item, key, id }) => (
					<li key={key} className={css.list_item}>
						<MenuLinkPrimary href={`/${lang}/#${id}`}>{item}</MenuLinkPrimary>
					</li>
				))}
			</ul>
		</nav>
	);
}

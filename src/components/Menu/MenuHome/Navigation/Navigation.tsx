"use client";

// #region ============================== Imports

// components
import MenuLinkPrimary from "@/components/MenuLinkPrimary/MenuLinkPrimary";

// constants
import { HOME_SECTIONS_ARR } from "@/constants/sectionNames";

// styles
import css from "./Navigation.module.css";

// types
import { Props } from "./Navigation.types";

// #endregion ===========================

// utility
import useActiveSection from "@/hooks/useActiveSection";

export default function Navigation({ menuItems, lang }: Props) {
	const sections = [...HOME_SECTIONS_ARR];
	const activeSection = useActiveSection(sections);

	if (!menuItems) return null;

	return (
		<nav className={css.nav}>
			<ul className={css.list_container}>
				{menuItems.map(({ item, key, id }) => {
					return (
						<li key={key} className={css.list_item}>
							<MenuLinkPrimary
								href={`/${lang}/#${id}`}
								isActive={activeSection === id}
							>
								{item}
							</MenuLinkPrimary>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

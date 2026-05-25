"use client";

// #region ============================== Imports

// components
import { MenuLinkPrimary } from "@/components/MenuLinkPrimary/MenuLinkPrimary";

// constants
import { HOME_SECTIONS_ARR } from "@/constants/sectionNames";

// hooks
import useActiveSection from "@/hooks/useActiveSection";

// styles
import css from "./Navigation.module.css";

// types
import { Props } from "./Navigation.types";

// utility
import scrollToSection from "@/lib/util/scrollToSection";

// #endregion ===========================

export default function Navigation({ menuItems, onClick = undefined }: Props) {
	const sections = [...HOME_SECTIONS_ARR];
	const activeSection = useActiveSection(sections);

	return (
		<nav className={css.nav}>
			<ul className={css.list_container}>
				{menuItems?.map(({ item, key, id }) => {
					return (
						<li key={key} className={css.list_item}>
							<MenuLinkPrimary
								isActive={activeSection === id}
								onClick={() => {
									scrollToSection(id);
									return () => onClick;
								}}
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

"use client";

// #region ============================== Imports

// components
import { MenuLinkPrimary } from "@/components/MenuLink/MenuLink";

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
import React from "react";

// #endregion ===========================

export default function Navigation({ menuItems, onClick = undefined }: Props) {
	const layoutId = React.useId();
	const sections = [...HOME_SECTIONS_ARR];
	const activeSection = useActiveSection(sections);

	return (
		<nav className={css.nav}>
			<ul className={css.list_container}>
				{menuItems?.map(({ item, key, id }) => (
					<MenuLinkPrimary
						key={key}
						layoutId={layoutId}
						isActive={activeSection === id}
						onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
							scrollToSection(id);
							onClick?.(e);
						}}
					>
						{item}
					</MenuLinkPrimary>
				))}
			</ul>
		</nav>
	);
}

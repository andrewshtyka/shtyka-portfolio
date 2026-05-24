"use client";

// #region ============================== Imports
// components
import Emblem from "../Icons/Emblem/Emblem";

// styles
import css from "./LogoMenu.module.css";

// types
import { Props } from "./LogoMenu.types";

// #endregion ===========================

export default function LogoMenu({ isMenuOpened }: Props) {
	const menuOpenedButtonClass = isMenuOpened ? "invert_colors" : "";
	const appliedClasses = `${css.logo} ${menuOpenedButtonClass}`;

	return (
		<span className={appliedClasses}>
			<Emblem />
		</span>
	);
}

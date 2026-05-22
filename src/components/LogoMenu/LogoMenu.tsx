// #region ============================== Imports
// components
import Link from "next/link";

// styles
import css from "./LogoMenu.module.css";

// types
import { Props } from "./LogoMenu.types";

// utils
import React from "react";
import Emblem from "../Icons/Emblem/Emblem";
// #endregion ===========================

export default function LogoMenu({ isMenuOpened, lang }: Props) {
	const menuOpenedButtonClass = isMenuOpened ? "invert_colors" : "";
	const appliedClasses = `${css.link} ${menuOpenedButtonClass}`;

	return (
		<Link href={`/${lang}`} className={appliedClasses}>
			<Emblem />
		</Link>
	);
}

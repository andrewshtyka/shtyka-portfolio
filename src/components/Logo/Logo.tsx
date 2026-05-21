// #region ============================== Imports
// components
import Link from "next/link";

// styles
import css from "./Logo.module.css";

// types
import { Props } from "./Logo.types";

// utils
import React from "react";
import Emblem from "../Icons/Emblem/Emblem";
// #endregion ===========================

export default function Logo({ isMenuOpened }: Props) {
	const menuOpenedButtonClass = isMenuOpened ? "invert_colors" : "";
	const appliedClasses = `${css.link} ${menuOpenedButtonClass}`;

	return (
		<Link href="/" className={appliedClasses}>
			<Emblem />
		</Link>
	);
}

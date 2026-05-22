"use client";

// #region ============================== Imports
// components
import Link from "next/link";

// styles
import css from "./LogoMenu.module.css";

// types
import { Props } from "./LogoMenu.types";

// utils
import Emblem from "../Icons/Emblem/Emblem";

// #endregion ===========================

export default function LogoMenu({ isMenuOpened, lang }: Props) {
	const menuOpenedButtonClass = isMenuOpened ? "invert_colors" : "";
	const appliedClasses = `${css.link} ${menuOpenedButtonClass}`;

	function scrollToTop() {
		window.scrollTo({
			top: 0,
		});
	}

	return (
		<Link href={`/${lang}`} className={appliedClasses} onClick={scrollToTop}>
			<Emblem />
		</Link>
	);
}

/**
 * TODO 1
 * Remove Index from menu
 * (Logo will lead to hero section)
 */

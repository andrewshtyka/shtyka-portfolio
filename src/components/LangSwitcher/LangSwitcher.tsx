"use client";

// #region ============================== Imports

// components
import { MenuLinkSecondary } from "../MenuLink/MenuLink";
import IconGlobe from "../Icons/IconGlobe/IconGlobe";

// styles
import css from "./LangSwitcher.module.css";

// types
import { Props } from "./LangSwitcher.types";

// utils
import { usePathname } from "next/navigation";
import { getTargetPath } from "./lib/helpers/getTargetPath";

// #endregion ===========================

export default function LangSwitcher({
	currentLang,
	isHiddenOnMobile = false,
}: Props) {
	const pathname = usePathname();

	if (!currentLang || typeof currentLang !== "string") return;

	const targetPath = getTargetPath(currentLang, pathname);

	// write language to cookies when button is clicked
	const nextLang = currentLang === "ua" ? "en" : "ua";
	const setLocaleCookie = () => {
		document.cookie = `NEXT_LOCALE=${nextLang}; path=/; max-age=${60 * 60 * 24 * 365}`;
	};

	const visibilityClass = isHiddenOnMobile ? `${css.mob_hidden}` : "";
	const classes = `${visibilityClass} ${css.container}`;

	return (
		<span className={classes}>
			<MenuLinkSecondary
				href={targetPath}
				scroll={false}
				onClick={setLocaleCookie}
				icon={<IconGlobe/>}
			>
				{currentLang === "ua" ? "Eng" : "Укр"}
			</MenuLinkSecondary>
		</span>
	);
}

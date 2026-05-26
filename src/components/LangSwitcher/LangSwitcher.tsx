"use client";

// #region ============================== Imports

// components
import { MenuLinkSecondary } from "../MenuLink/MenuLink";

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

	const visibilityClass = isHiddenOnMobile ? `${css.mob_hidden}` : "";
	const classes = `${visibilityClass} ${css.container}`;

	return (
		<span className={classes}>
			<MenuLinkSecondary href={targetPath} isTransparent={true} scroll={false}>
				{currentLang === "ua" ? "Eng" : "Укр"}
			</MenuLinkSecondary>
		</span>
	);
}

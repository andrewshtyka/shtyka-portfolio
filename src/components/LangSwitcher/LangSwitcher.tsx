// #region ============================== Imports
"use client";

// components
import MenuLinkPrimary from "../MenuLinkPrimary/MenuLinkPrimary";

// utils
import { usePathname } from "next/navigation";
import { getTargetPath } from "./lib/helpers/getTargetPath";

// styles
import css from "./LangSwitcher.module.css";

// types
import { Props } from "./LangSwitcher.types";

// #endregion ===========================

export default function LangSwitcher({
	currentLang,
	isHiddenOnMobile = false,
}: Props) {
	const pathname = usePathname();

	if (!currentLang || typeof currentLang !== "string") return;

	const targetPath = getTargetPath(currentLang, pathname);

	const visibilityClass = isHiddenOnMobile ? "mob_hidden_768" : "";
	const classes = `${visibilityClass} ${css.container}`;

	return (
		<span className={classes}>
			<MenuLinkPrimary href={targetPath} isTransparent={true}>
				{currentLang === "ua" ? "Eng" : "Укр"}
			</MenuLinkPrimary>
		</span>
	);
}

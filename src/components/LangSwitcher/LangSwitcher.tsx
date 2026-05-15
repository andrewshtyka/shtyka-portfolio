// #region ============================== Imports
"use client";

// components
import Link from "next/link";

// utils
import { usePathname } from "next/navigation";
import { getTargetPath } from "./lib/helpers/getTargetPath";

// types
import { Props } from "./LangSwitcher.types";

// #endregion ===========================

export default function LangSwitcher({ currentLang }: Props) {
	const pathname = usePathname();

	if (!currentLang || typeof currentLang !== "string") return;

	const targetPath = getTargetPath(currentLang, pathname);

	return (
		<Link href={targetPath} className="f_display f_semibold">
			{currentLang === "ua" ? "Eng" : "Укр"}
		</Link>
	);
}

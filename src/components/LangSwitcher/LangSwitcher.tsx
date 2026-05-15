"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
	currentLang: string;
};

export default function LangSwitcher({ currentLang }: Props) {
	const pathname = usePathname();

	if (!currentLang || typeof currentLang !== "string") return;

	const targetLang = currentLang === "ua" ? "en" : "ua";
	const label = currentLang === "ua" ? "Eng" : "Укр";

	const targetPath = pathname?.replace(`/${currentLang}`, `/${targetLang}`);

	return <Link href={targetPath}>{label}</Link>;
}

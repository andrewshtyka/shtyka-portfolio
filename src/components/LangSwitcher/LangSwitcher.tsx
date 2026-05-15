"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
	currentLang: string;
};

export default function LangSwitcher({ currentLang }: Props) {
	const pathname = usePathname();

	const targetLang = currentLang === "ua" ? "en" : "ua";
	const label = currentLang === "ua" ? "eng" : "укр";

	const targetPath = pathname.replace(`/${currentLang}`, `/${targetLang}`);

	return <Link href={targetPath}>{label}</Link>;
}

// #region ============================== Imports

// components

// styles
import css from "./Footer.module.css";

// types
import { Props } from "./Footer.types";

// utils
import { headers } from "next/headers";
// import { getUkrMonthYear } from "./lib/helpers/getUkrMonthYear";
import FooterClient from "./FooterClient/FooterClient";

// #endregion ===========================

export default async function Footer({ obj: ui, lang = "en" }: Props) {
	if (!ui || typeof ui !== "object") return;

	// get browser name (from proxy.ts)
	const headersList = await headers();
	const browserName = headersList.get("x-browser-name");

	// last website update
	const appliedLang = lang === "ua" ? "uk" : "en";
	// const date: string = new Intl.DateTimeFormat(appliedLang, {
	// 	month: "long",
	// 	year: "numeric",
	// }).format(new Date());
	// const lastUpdate = appliedLang === "uk" ? getUkrMonthYear(date) : date;
	const lastUpdate = appliedLang === "uk" ? "Лип 2026" : "Jul 2026";

	// current year
	const currentYear: string = new Intl.DateTimeFormat(lang, {
		year: "numeric",
	}).format(new Date());

	return (
		<footer className={css.container}>
			<FooterClient
				ui={ui}
				lastUpdate={lastUpdate}
				browserName={browserName}
				currentYear={currentYear}
			/>
		</footer>
	);
}

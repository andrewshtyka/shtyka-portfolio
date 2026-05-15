export function getTargetPath(currentLang: string, pathname: string) {
	const targetLang = currentLang === "ua" ? "en" : "ua";
	return pathname?.replace(`/${currentLang}`, `/${targetLang}`);
}

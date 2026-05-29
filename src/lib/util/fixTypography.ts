/**
 * Remove hanging punctuation
 */

export function fixTypography(text: string) {
	if (!text || typeof text !== "string") return "";

	const NBSP = "\u00A0";

	return text.replace(/(^|\s)([а-яА-ЯіїєґІЇЄҐa-zA-Z]{1,3})\s+/g, `$1$2${NBSP}`);
}

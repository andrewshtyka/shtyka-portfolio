import { HOME_SECTIONS } from "@/constants/sectionNames";

export default function DynamicCSS() {
	// margin for home page sections with anchor links (except for "bio")
	const SELECTORS = Object.values(HOME_SECTIONS)
		.filter((_, i) => i !== 1)
		.map((id) => `#${id}`)
		.join(", ");

	const CSS = `${SELECTORS} { scroll-margin-top: var(--offset-sections-mid); }`;

	return <style dangerouslySetInnerHTML={{ __html: CSS }} />;
}

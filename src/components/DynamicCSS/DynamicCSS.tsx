import { HOME_SECTIONS_ARR_STYLING } from "@/constants/sectionNames";

export default function DynamicCSS() {
	// margin for home page sections with anchor links
	// currently: Projects, Contact
	const SELECTORS = HOME_SECTIONS_ARR_STYLING.map((id) => `#${id}`).join(", ");

	const CSS = `${SELECTORS} { scroll-margin-top: var(--offset-sections-large); }`;

	return <style dangerouslySetInnerHTML={{ __html: CSS }} />;
}

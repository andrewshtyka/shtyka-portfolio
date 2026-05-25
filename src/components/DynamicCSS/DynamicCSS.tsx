import {
	HOME_SECTIONS,
	HOME_SECTIONS_ARR_STYLING,
} from "@/constants/sectionNames";

/**
 * Margin for home page sections with anchor links
 */
export default function DynamicCSS() {
	// positive: Projects, Contact
	const SELECTORS_OFFSET_POSITIVE = HOME_SECTIONS_ARR_STYLING.map(
		(id) => `#${id}`
	).join(", ");

	// negative: Experiments
	const SELECTORS_OFFSET_NEGATIVE = `#${HOME_SECTIONS.experiments}`;

	const CSS = `
	${SELECTORS_OFFSET_POSITIVE} {
		scroll-margin-top: var(--offset-sections-mid);
	}

	${SELECTORS_OFFSET_NEGATIVE} {
		scroll-margin-top: calc(var(--offset-sections-small) * -1);
	}
	 `;

	return <style dangerouslySetInnerHTML={{ __html: CSS }} />;
}

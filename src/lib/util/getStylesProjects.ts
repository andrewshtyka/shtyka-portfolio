export function getStylesProjects(num: 1 | 2) {
	if (!num) return {};

	switch (num) {
		case 1:
			return {
				flexBasis: "var(--width-card-project)",
			};
		case 2:
			return {
				flexBasis: "var(--content-wide-width-max)",
			};
		default:
			return {};
	}
}

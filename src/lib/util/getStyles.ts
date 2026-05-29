export function getStylesExperiments(num: 1 | 2 | 3) {
	if (!num) return {};

	switch (num) {
		case 1:
			return {
				flexBasis: "var(--width-card-experiment)",
			};
		case 2:
			return {
				flexBasis:
					"calc(var(--width-card-experiment) * 2 + var(--offset-base))",
			};
		case 3:
			return {
				flexBasis: "var(--content-wide-width-max)",
			};
		default:
			return {};
	}
}

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

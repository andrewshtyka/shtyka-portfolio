export const HOME_SECTIONS = {
	index: "home-scroll-section-index",
	bio: "home-scroll-section-bio",
	projects: "home-scroll-section-projects",
	experiments: "home-scroll-section-experiments",
	contact: "home-scroll-section-contact",
} as const;

export const HOME_SECTIONS_ARR = [
	HOME_SECTIONS.index,
	HOME_SECTIONS.bio,
	HOME_SECTIONS.projects,
	HOME_SECTIONS.experiments,
	HOME_SECTIONS.contact,
] as const;

/**
 * ================================================== Components
 */

export const TOOLTIP_DELAY = 100;

export const LINK_ANIMATION_CSS = {
	ease: "cubic-bezier(0.5, 0, 0, 1)",
	duration: "0.5s",
};

export const LINK_HOVER_ANIMATION = {
	duration: 0.75,
	speed: 0.1,
	ease: "power1.inOut",
};

export const ICON_HOVER_ANIMATION = {
	duration: 0.75,
	ease: "power2.out",
};

/**
 * ================================================== Sections
 */

export const MENU_ANIMATION = {
	transition: {
		duration: 0.3,
	},
	onLoadMenu: {
		initial: { transform: "translateY(-150%)" },
		animate: { transform: "translateY(0%)" },
		transition: {
			duration: 1,
			delay: 2,
			ease: [0.25, 0, 0, 1] as const,
		},
	},
	mobile: {
		initial: { height: 0 },
		animate: { height: "fit-content" },
		exit: { height: 0 },
		transition: {
			duration: 0.5,
			ease: [0.25, 0, 0, 1] as const,
		},
	},
};

export const SECTION_HERO_ANIMATION = {
	video: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
		transition: {
			duration: 3,
			ease: [0.25, 0, 0, 1] as const,
		},
	},
	title_1: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
		transition: {
			duration: 0.0000001,
			delay: 1,
		},
	},
	title_2: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
		transition: {
			duration: 0.0000001,
			delay: 1.3,
		},
	},
	subtitle: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
		transition: {
			duration: 1.5,
			delay: 1.5,
			ease: [0.25, 0, 0, 1] as const,
		},
	},
	dots: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
		transition: {
			duration: 1,
			delay: 1.7,
			ease: [0.25, 0, 0, 1] as const,
		},
	},
	list: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 1.5,
				staggerChildren: 0.05,
			},
		},
	},
	listItem: {
		hidden: {
			opacity: 0,
			y: 16,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				ease: [0.25, 0, 0, 1] as const,
			},
		},
	},
	button: {
		initial: {
			opacity: 0,
			y: 16,
		},
		animate: {
			opacity: 1,
			y: 0,
		},
		transition: {
			duration: 1,
			delay: 2,
			ease: [0.25, 0, 0, 1] as const,
		},
	},
};

export const SECTION_ABOUT_ANIMATION = {
	container: {
		initial: {
			transform: "scale(1.25)",
		},
		animate: {
			transform: "scale(1)",
		},
		transition: {},
	},
	details: {
		hide: {
			opacity: 0,
		},
		show: {
			opacity: 1,
		},
		transition: {
			duration: 1,
		},
	},
};

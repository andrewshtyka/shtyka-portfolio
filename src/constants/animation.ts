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

export const BUTTON_UP = {
	hidden: {
		y: "120%",
	},
	visible: {
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.25, 0, 0, 1] as const,
		},
	},
};

/**
 * ================================================== Home Sections
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
		animate: { height: "auto" },
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
		show: {
			opacity: 1,
		},
		hide: {
			opacity: 0,
		},
		transition: {
			duration: 1,
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
	section: {
		initial: {
			opacity: 0,
		},
		show: {
			opacity: 1,
		},
		hide: {
			opacity: 0,
		},
		transition: {
			duration: 1,
			ease: [0.25, 0, 0, 1] as const,
		},
	},
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
		viewport: {
			once: true,
		},
	},
};

export const SECTION_EXPERIENCE_ANIMATION = {
	title: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
		transition: {
			duration: 0.5,
		},
		viewport: {
			once: true,
			margin: "-24px 0px -24px 0px",
		},
	},
	divider: {
		initial: {
			width: "0%",
		},
		animate: { width: "100%" },
		transition: {
			duration: 0.5,
			delay: (i: number) => i * 0.25,
		},
		viewport: {
			once: true,
		},
	},
	line: {
		initial: {
			opacity: 0,
			y: 16,
		},
		animate: {
			opacity: 1,
			y: 0,
		},
		transition: {
			duration: 0.25,
			delay: (i: number) => i * 0.1,
		},
		viewport: {
			once: true,
		},
	},
};

export const SECTION_ACHIEVEMENTS_ANIMATION = {
	title: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
		transition: {
			duration: 0.5,
		},
		viewport: {
			once: true,
			margin: "-24px 0px -24px 0px",
		},
	},
	divider: {
		initial: {
			width: "0%",
		},
		animate: { width: "100%" },
		transition: {
			duration: 0.5,
			delay: (i: number) => i * 0.25,
		},
		viewport: {
			once: true,
		},
	},
	line: {
		initial: {
			opacity: 0,
			y: 16,
		},
		animate: {
			opacity: 1,
			y: 0,
		},
		transition: {
			duration: 0.25,
			delay: (i: number) => i * 0.1,
		},
		viewport: {
			once: true,
		},
	},
};

export const SECTION_CLIENTS_ANIMATION = {
	title: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
		transition: {
			duration: 0.5,
		},
		viewport: {
			once: true,
			margin: "-24px 0px -24px 0px",
		},
	},
	list: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.25,
				staggerChildren: 0.05,
			},
		},
		viewport: {
			once: true,
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
		viewport: {
			once: true,
			amount: 0,
			margin: "0px",
		},
	},
};

export const SECTION_RESUME_ANIMATION = {
	card: {
		initial: {
			opacity: 0,
			y: "24px",
		},
		animate: {
			opacity: 1,
			y: 0,
		},
		transition: {
			duration: 1.5,
			ease: [0.25, 0, 0, 1] as const,
		},
		viewport: {
			once: true,
		},
	},
	text: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
		transition: {
			duration: 0.5,
		},
		viewport: {
			once: true,
			margin: "-24px 0px -24px 0px",
		},
	},
};

export const SECTION_PROJECTS_ANIMATION = {
	title: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
		transition: {
			duration: 0.5,
		},
		viewport: {
			once: true,
			margin: "-24px 0px -24px 0px",
		},
	},
	project: {
		video: {
			initial: {
				opacity: 0,
			},
			show: {
				opacity: 1,
			},
			hide: {
				opacity: 0,
			},
			transition: {
				duration: 1,
				ease: [0.25, 0, 0, 1] as const,
			},
		},
		description: {
			initial: {
				opacity: 0,
			},
			animate: {
				opacity: 1,
			},
			transition: {
				duration: 1.5,
				ease: [0.25, 0, 0, 1] as const,
			},
			viewport: {
				once: true,
			},
		},
		divider: {
			initial: {
				width: "0%",
			},
			animate: { width: "100%" },
			transition: {
				duration: 0.5,
				delay: 0.5,
			},
			viewport: {
				once: true,
			},
		},
		list: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					delayChildren: 0.25,
					staggerChildren: 0.05,
				},
			},
			viewport: {
				once: true,
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
			viewport: {
				once: true,
				amount: 0.5,
			},
		},
		button: {
			hidden: {
				opacity: 0,
				y: 16,
			},
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 1.5,
					ease: [0.25, 0, 0, 1] as const,
				},
			},
			viewport: {
				once: true,
				amount: 0.5,
			},
		},
	},
	end: {
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
		viewport: {
			once: true,
			amount: 0.5,
		},
	},
};

export const SECTION_EXPERIMENTS_ANIMATION = {
	title: {
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
			ease: [0.25, 0, 0, 1] as const,
		},
		viewport: {
			once: true,
			margin: "-24px 0px -24px 0px",
		},
	},
	experiment: {
		video: {
			initial: {
				opacity: 0,
			},
			show: {
				opacity: 1,
			},
			hide: {
				opacity: 0,
			},
			transition: {
				duration: 1,
				ease: [0.25, 0, 0, 1] as const,
			},
		},
		title: {
			initial: {
				opacity: 0,
			},
			animate: {
				opacity: 1,
			},
			transition: {
				duration: 0.5,
			},
			viewport: {
				once: true,
				margin: "-24px 0px -24px 0px",
			},
		},
	},
	list: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.25,
				staggerChildren: 0.05,
			},
		},
		viewport: {
			once: true,
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
		viewport: {
			once: true,
		},
	},
};

export const SECTION_CONTACT_ANIMATION = {
	title: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
		transition: {
			duration: 0.5,
		},
		viewport: {
			once: true,
			margin: "-24px 0px -24px 0px",
		},
	},
	video: {
		initial: {
			opacity: 0,
		},
		show: {
			opacity: 1,
		},
		hide: {
			opacity: 0,
		},
		transition: {
			duration: 1,
			ease: [0.25, 0, 0, 1] as const,
		},
	},
	message: {
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
		viewport: {
			once: true,
		},
	},
	divider: {
		initial: {
			width: "0%",
		},
		animate: { width: "100%" },
		transition: {
			duration: 0.5,
			delay: 0.5,
		},
		viewport: {
			once: true,
		},
	},
	list: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.25,
				staggerChildren: 0.05,
			},
		},
		viewport: {
			once: true,
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
		viewport: {
			once: true,
			amount: 0.5,
		},
	},
};

export const SECTION_FOOTER_ANIMATION = {
	title: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
		transition: {
			duration: 0.5,
		},
		viewport: {
			once: true,
			margin: "-24px 0px -24px 0px",
		},
	},
	divider: {
		initial: {
			width: "0%",
		},
		animate: { width: "100%" },
		transition: {
			duration: 0.5,
			delay: 0.5,
		},
		viewport: {
			once: true,
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
		viewport: {
			once: true,
			amount: 0.5,
		},
	},
};

/**
 * ================================================== Project page
 */

export const PROJECT_INTRO_ANIMATION = {
	heading: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.0000001,
			},
		},
	},
	description: {
		initial: {
			opacity: 0,
			y: 16,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				ease: [0.25, 0, 0, 1] as const,
			},
		},
	},
	divider: {
		initial: {
			width: "0%",
		},
		animate: {
			width: "100%",
			transition: {
				duration: 0.5,
				delay: 0.25,
			},
		},
		viewport: {
			once: true,
		},
	},
	video: {
		initial: {
			opacity: 0,
		},
		show: {
			opacity: 1,
		},
		hide: {
			opacity: 0,
		},
		transition: {
			duration: 1,
			ease: [0.25, 0, 0, 1] as const,
		},
	},

	// ???
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

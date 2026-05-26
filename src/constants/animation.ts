/**
 * ================================================== Components
 */

import { opacity } from "@/components/LayoutTransition/anim";
import { transaction } from "sanity/migrate";

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
			delay: 1,
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
			// delay: 0,
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
			duration: 0.001,
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
			duration: 0.001,
			delay: 1.3,
		},
	},
};

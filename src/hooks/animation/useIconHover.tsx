import React from "react";

// animation
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ICON_HOVER_ANIMATION } from "@/constants/animation";

gsap.registerPlugin(useGSAP);

/**
 * Hover icon - counter effect
 */

const DIRECTION_CONFIGS = {
	right: {
		orig: { to: { xPercent: 150 } },
		clone: {
			from: { top: "0", left: "-150%" },
			to: { xPercent: 150 },
		},
	},
	top: {
		orig: { to: { yPercent: -100 } },
		clone: {
			from: { bottom: "-100%", left: "0" },
			to: { yPercent: -100 },
		},
	},
} as const;

export function useIconHover(
	refIcon: React.RefObject<HTMLElement | null>,
	refIconContainer: React.RefObject<HTMLElement | null>,
	direction: "right" | "top" = "right"
) {
	const timelineRef = React.useRef<gsap.core.Timeline | null>(null);
	const cloneRef = React.useRef<HTMLElement | null>(null);

	const appliedConfig = DIRECTION_CONFIGS[direction];

	useGSAP(() => {
		if (!refIcon.current || !refIconContainer.current) return;

		// clone icon and assign to cloneRef
		const targetClone = refIcon.current.cloneNode(true) as HTMLElement;
		targetClone.setAttribute("aria-hidden", "true");

		Object.assign(targetClone.style, {
			position: "absolute",
			...appliedConfig.clone.from,
		});
		refIconContainer.current.appendChild(targetClone);
		cloneRef.current = targetClone;

		// animate
		timelineRef.current = gsap.timeline({
			paused: true,
			defaults: {
				duration: ICON_HOVER_ANIMATION.duration,
				ease: ICON_HOVER_ANIMATION.ease,
			},
		});
		timelineRef.current
			.to(refIcon.current, {
				...appliedConfig.orig.to,
			})
			.to(
				cloneRef.current,
				{
					...appliedConfig.clone.to,
				},
				"<"
			);

		return () => {
			cloneRef.current?.remove();
			cloneRef.current = null;
		};
	});

	const play = () => {
		if (timelineRef.current?.isActive()) return;
		timelineRef.current?.restart();
	};

	return { play };
}

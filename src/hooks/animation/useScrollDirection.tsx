"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

/**
 * Returns:
 * - scroll down: true
 * - scroll up: false
 * To be used - for hiding / showing menu on scroll
 *
 * @param threshold - amount of px, when passed - returns true
 */

export function useScrollDirection(threshold = 200) {
	const { scrollY } = useScroll();
	const [isHidden, setIsHidden] = useState(() => {
		if (typeof window === "undefined") return false;
		return window.scrollY > threshold;
	});

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious() ?? 0;
		const diff = latest - previous;

		// Hide on scroll down
		if (diff > 0 && latest > threshold) {
			setIsHidden(true);
		}
		// Show on scroll up
		else if (diff < -5) {
			setIsHidden(false);
		}
	});

	return isHidden;
}

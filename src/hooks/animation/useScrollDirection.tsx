"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

/**
 * Returns:
 * - scroll down: true
 * - scroll up: false
 * To be used - to hide / show menu on scroll
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

		// Ховаємо при скролі вниз, якщо пройшли поріг
		if (diff > 0 && latest > threshold) {
			setIsHidden(true);
		}
		// Показуємо при будь-якому скролі вгору
		else if (diff < -5) {
			setIsHidden(false);
		}
	});

	return isHidden;
}

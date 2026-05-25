"use client";

import { useState, useEffect } from "react";

/**
 * Returns ID of section that is currently in viewport
 * @param arr - array of IDs of sections, for example ["bio", "projects"]
 */
export default function useActiveSection(arr: string[]) {
	const [isInViewport, setIsInViewport] = useState<string>("");

	useEffect(() => {
		const observerOptions: IntersectionObserverInit = {
			rootMargin: "-50% 0px -50% 0px",
			threshold: 0,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsInViewport(entry.target.id);
				}
			});
		}, observerOptions);

		arr.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, [arr]);

	return isInViewport;
}

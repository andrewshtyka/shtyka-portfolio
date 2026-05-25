"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

/**
 * 1. Returns ID of section that is currently in viewport
 * 2. Changes URL to current section without reloading page
 * @param arr - array of IDs of sections, for example ["bio", "projects"]
 */
export default function useActiveSection(arr: string[]) {
	const [isInViewport, setIsInViewport] = useState<string>("");
	const pathname = usePathname();

	useEffect(() => {
		const observerOptions: IntersectionObserverInit = {
			rootMargin: "-50% 0px -50% 0px",
			threshold: 0,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsInViewport(entry.target.id);
					window.history.replaceState(
						null,
						"",
						`${pathname}#${entry.target.id}`
					);
					
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

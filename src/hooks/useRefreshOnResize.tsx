"use client";

import { useEffect } from "react";

/**
 * Auto page refresh when browser width changed
 */
export const useRefreshOnResize = (): void => {
	useEffect(() => {
		const lastWidth = window.innerWidth;

		const handleResize = (): void => {
			const currentWidth = window.innerWidth;
			if (currentWidth !== lastWidth) {
				window.location.reload();
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
};

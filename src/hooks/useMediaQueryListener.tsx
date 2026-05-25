import React from "react";

/**
 * Set size automatically when window is resized (breakpoint is crossed)
 * @param callback - setter function
 * @param widthMin - breakpoint
 */

export default function useMediaQueryListener(
	callback: (param: boolean) => void,
	widthMin = 768
): void {
	React.useEffect(() => {
		const handleResize = (): void => {
			if (window.innerWidth >= widthMin) {
				callback(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [callback, widthMin]);
}

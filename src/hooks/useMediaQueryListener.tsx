import React from "react";

// do something automatically on window resize (when breakpoint is crossed)
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

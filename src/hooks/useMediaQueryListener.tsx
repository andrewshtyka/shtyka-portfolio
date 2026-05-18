import React from "react";

export default function useMediaQueryListener(
	callback: (param: boolean) => void
): void {
	React.useEffect(() => {
		const handleResize = (): void => {
			if (window.innerWidth >= 768) {
				callback(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [callback]);
}

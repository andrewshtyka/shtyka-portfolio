"use client";

import React from "react";

// get current window width & height
export default function useWindowSize() {
	const [windowDimensions, setWindowDimensions] = React.useState({
		width: 0,
		height: 0,
	});

	React.useEffect(() => {
		function handleResize() {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		// Initialize dimensions on mount
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}

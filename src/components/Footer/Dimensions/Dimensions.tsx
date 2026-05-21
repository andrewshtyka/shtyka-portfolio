"use client";

import useWindowSize from "@/hooks/useWindowSize";

export default function Dimensions() {
	const { width, height } = useWindowSize();

	// TODO
	// If width / height = 0, show "Calculating..."

	if (width === 0 || height === 0) {
		return <>...</>;
	} else {
		return (
			<>
				{width}x{height}
			</>
		);
	}
}

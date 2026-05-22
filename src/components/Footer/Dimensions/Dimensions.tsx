"use client";

import useWindowSize from "@/hooks/useWindowSize";

export default function Dimensions() {
	const { width, height } = useWindowSize();

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

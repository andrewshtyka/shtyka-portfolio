"use client";

// #region ============================== Imports

// animation
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

// types
import { Props } from "./IconSign.types";

// utility
import React from "react";

// #endregion ===========================

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(DrawSVGPlugin);

export default function IconSign({ isInView = false }: Props) {
	const color = "var(--color-text-secondary)";
	const thickness = "var(--space-1)";

	const refPath = React.useRef<SVGPathElement | null>(null);
	const timelineRef = React.useRef<gsap.core.Timeline | null>(null);

	useGSAP(() => {
		if (!refPath.current) return;
		timelineRef.current = gsap.timeline({ paused: false });

		timelineRef.current.fromTo(
			refPath.current,
			{
				drawSVG: "0% 0%",
			},
			{
				drawSVG: "0% 100%",
				duration: 3,
				ease: "power1.out",
			}
		);
	});

	React.useEffect(() => {
		if (isInView) {
			timelineRef.current?.restart();
		}
	}, [isInView]);

	return (
		<svg
			height="72"
			width="165"
			viewBox="0 0 167 74"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				ref={refPath}
				stroke={color}
				strokeWidth={thickness}
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M10.1983 73C19.5316 61.1667 39.0983 30.4 42.6983 2C43.3649 13.8333 43.0983 44 36.6983 70C31.6983 64.3333 18.7983 51.8 7.19827 47C-7.30173 41 2.69726 81.5 47.1973 55C47.1966 57 46.7 64.1 45.5 68.5C45.5 64.6667 47.0953 55 52.6953 55C58.2953 55 57.6953 62.6667 56.6953 66.5C57.7469 60.4167 61.81 50.16 69.65 57.8C67.3 55.5 61.89 52.62 59.05 59.5C55.5 68.1 67.9926 70.25 70.5213 62C71 52.5 69.5 47 70.1953 40C70.1302 47.6667 70.3 63.7 71.5 66.5C72.6667 66.6667 74.8 64.4 74 54L75 66.5C74.3333 61 74.9 51.5 82.5 57.5C79.8333 59.5 77.5 65.5 83.5 65C88 64.5 92.8252 59.1565 91.5 57.5C89.5 55 87 55.5 85.5 57C83.5 59 92 73.5 98 56C99 60.8333 103 70 106.5 58C109.667 60.8333 116 64 114 56C111.5 46 94 42.5 105.5 34.5C117 26.5 127.5 19 166 1"
			/>
		</svg>
	);
}

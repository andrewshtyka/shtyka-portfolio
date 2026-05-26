"use client";

// animation
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// types
import { Props } from "./Magnetic.types";

// utility
import React from "react";

export default function Magnetic({ children }: Props) {
	const magnetic = React.useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const xTo = gsap.quickTo(magnetic.current, "x", {
				duration: 1,
				ease: "elastic.out(1, 0.3)",
			});
			const yTo = gsap.quickTo(magnetic.current, "y", {
				duration: 1,
				ease: "elastic.out(1, 0.3)",
			});

			const handleMouseMove = (e: MouseEvent) => {
				const target = magnetic.current;
				if (!target) return;

				const { clientX, clientY } = e;
				const { width, height, left, top } = target.getBoundingClientRect();

				const x = clientX - (left + width / 2);
				const y = clientY - (top + height / 2);

				xTo(x * 0.1);
				yTo(y * 0.5);
			};

			const handleMouseLeave = () => {
				xTo(0);
				yTo(0);
			};

			const element = magnetic.current;
			element?.addEventListener("mousemove", handleMouseMove);
			element?.addEventListener("mouseleave", handleMouseLeave);

			return () => {
				element?.removeEventListener("mousemove", handleMouseMove);
				element?.removeEventListener("mouseleave", handleMouseLeave);
			};
		},
		{ scope: magnetic }
	);

	return React.cloneElement(children as React.ReactElement<any>, {
		ref: magnetic,
	});
}

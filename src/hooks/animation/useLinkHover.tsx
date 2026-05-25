"use client";

// animation
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react";

// constants
import { LINK_HOVER_ANIMATION } from "@/constants/animation";

// utility
import React from "react";

gsap.registerPlugin(ScrambleTextPlugin);

export function useLinkHover(ref: React.RefObject<HTMLElement | null>) {
	const tlRef = React.useRef<gsap.core.Timeline | null>(null);
	const originalTextRef = React.useRef<string>("");

	useGSAP(
		() => {
			if (!ref.current) return;
			const el = ref.current;

			originalTextRef.current = el.textContent ?? "";

			gsap.set(el, {
				display: "inline-block",
				width: el.offsetWidth,
				textAlign: "left",
				whiteSpace: "nowrap",
				overflow: "clip",
			});
		},
		{ scope: ref }
	);

	const play = () => {
		if (tlRef.current?.isActive()) return;

		const el = ref.current;
		if (!el) return;

		const originalText = originalTextRef.current;

		el.textContent = originalText[0] ?? "";

		tlRef.current = gsap.timeline();
		tlRef.current.to(el, {
			duration: LINK_HOVER_ANIMATION.duration,
			scrambleText: {
				text: originalText,
				chars:
					"日ハミヒーシマトホテケメエカキクケコサシスセソタチツテトナニヌネノハヒフヘホ",
				speed: LINK_HOVER_ANIMATION.speed,
			},
			ease: LINK_HOVER_ANIMATION.ease,
		});
	};

	return { play };
}

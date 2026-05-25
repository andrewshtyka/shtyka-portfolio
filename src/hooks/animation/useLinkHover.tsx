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

/**
 * Hover text - scramble effect
 *
 * @param ref - ref for element with text
 * @param isFull - configures if text scrambles from 1 symbol to full length (false),
 * or if all symbols are visible from the start (true)
 */

export function useLinkHover(
	ref: React.RefObject<HTMLElement | null>,
	isFull = false
) {
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

		const finalText = isFull ? originalText : (originalText[0] ?? "");
		el.textContent = finalText;

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

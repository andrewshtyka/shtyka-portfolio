"use client";

// animation
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

// constants
import { LINK_HOVER_ANIMATION } from "@/constants/animation";

// utility
import React from "react";

/**
 * Hover text - scramble effect
 *
 * @param ref - ref for element with text
 * @param isFull - configures if text scrambles from 1 symbol to full length (false),
 * or if all symbols are visible from the start (true)
 * @param delayNum - sets delay for performing the function (use 1, 2, 3, etc)
 */
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrambleTextPlugin);

export function useLinkHover(
	ref: React.RefObject<HTMLElement | null>,
	startFromFirstLetter = true,
	delayNum = 0
) {
	const timelineRef = React.useRef<gsap.core.Timeline | null>(null);
	const originalTextRef = React.useRef<string>("");

	useGSAP(() => {
		if (!ref.current) return;
		const el = ref.current;

		originalTextRef.current = el.textContent ?? "";

		gsap.set(el, {
			display: "inline-flex",
			width: el.offsetWidth,
			textAlign: "left",
			whiteSpace: "nowrap",
			overflowX: "clip",
		});
	});

	const play = () => {
		if (startFromFirstLetter && ref.current?.matches(":hover")) return; // to avoid trigger onclick
		if (timelineRef.current?.isActive()) return;

		const el = ref.current;
		if (!el) return;

		const originalText = originalTextRef.current;

		const finalText = startFromFirstLetter
			? (originalText[0] ?? "")
			: originalText;
		el.textContent = finalText;

		timelineRef.current = gsap.timeline({ delay: delayNum / 10 });
		timelineRef.current.to(el, {
			duration: LINK_HOVER_ANIMATION.duration,
			scrambleText: {
				text: originalText,
				chars:
					" 日ハミヒーシマトホテケメエカキクケコサシスセソタチツテトナニヌネノハヒフヘホ",
				speed: LINK_HOVER_ANIMATION.speed,
			},
			ease: LINK_HOVER_ANIMATION.ease,
		});
	};

	return { play };
}

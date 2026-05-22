"use client";

import { useEffect, RefObject } from "react";

/**
 * Hook for automatic video play / pause (if in vieport)
 * @param ref - reference to video element
 * @param threshold - how much of video has to be in viewport so that is started playing
 */
export default function useVideoObserver(
	ref: RefObject<HTMLVideoElement | null>,
	threshold: number = 0.1
) {
	useEffect(() => {
		const video = ref.current;
		if (!video) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting)
					video.play().catch(() => console.warn("Video play error"));
				else video.pause();
			},
			{ threshold }
		);

		observer.observe(video);

		return () => {
			observer.unobserve(video);
			observer.disconnect();
		};
	}, [ref, threshold]);
}

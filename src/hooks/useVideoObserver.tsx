"use client";

import { useEffect, RefObject } from "react";

/**
 * Hook for automatic video play / pause (if in viewport)
 * @param ref - reference to video element
 * @param threshold - how much of video has to be in viewport so that it starts playing
 * @param preloadMargin - how many px before viewport to start downloading video
 */
export default function useVideoObserver(
	ref: RefObject<HTMLVideoElement | null>,
	threshold: number = 0.1,
	preloadMargin: number = 300
) {
	useEffect(() => {
		const video = ref.current;
		if (!video) return;

		// Observer 1: starts downloading video before it enters viewport
		const loadObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !video.src && video.dataset.src) {
					video.src = video.dataset.src;
					video.load();
					loadObserver.disconnect();
				}
			},
			{ rootMargin: `${preloadMargin}px` }
		);

		// Observer 2: play / pause based on visibility threshold
		const playObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					if (video.readyState >= 3) {
						// if video already loaded - play now
						video.play().catch(() => {});
					} else {
						// if video isn't loaded - wait and play
						video.addEventListener(
							"canplay",
							() => video.play().catch(() => {}),
							{ once: true }
						);
					}
				} else {
					video.pause();
				}
			},
			{ threshold }
		);

		loadObserver.observe(video);
		playObserver.observe(video);

		return () => {
			loadObserver.disconnect();
			playObserver.disconnect();
		};
	}, [ref, threshold, preloadMargin]);
}

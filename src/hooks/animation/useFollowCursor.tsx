import { useEffect } from "react";
import gsap from "gsap";

type Shape = "rectangle" | "circle";
type ShapeConfig = {
	x: number;
	y: number;
};

export default function useFollowCursor(
	hoverRef: React.RefObject<HTMLElement | null>,
	targetRef: React.RefObject<HTMLElement | null>,
	shape: Shape = "rectangle"
) {
	let shapeConfig: ShapeConfig;
	if (shape === "rectangle")
		shapeConfig = {
			x: 3.5,
			y: 1.5,
		};
	else if (shape === "circle")
		shapeConfig = {
			x: 1.7,
			y: 1.15,
		};

	useEffect(() => {
		const elHover = hoverRef?.current;
		const elTarget = targetRef?.current;
		if (!elHover || !elTarget) return;

		const xTo = gsap.quickTo(hoverRef?.current, "x", {
			duration: 0.5,
			ease: "power3",
		});
		const yTo = gsap.quickTo(hoverRef?.current, "y", {
			duration: 0.5,
			ease: "power3",
		});

		const handleMouseMove = (e: MouseEvent) => {
			const { clientX, clientY } = e;
			const { left: targetLeft, top: targetTop } =
				elTarget.getBoundingClientRect();
			const { width: hoverWidth, height: hoverHeight } =
				elHover.getBoundingClientRect();

			const x = clientX - targetLeft - hoverWidth / shapeConfig.x;
			const y = clientY - targetTop - hoverHeight / shapeConfig.y;

			xTo(x);
			yTo(y);
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [hoverRef, targetRef]);
}

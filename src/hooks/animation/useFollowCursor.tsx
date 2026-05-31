import { useEffect } from "react";
import gsap from "gsap";

type Shape = "rectangle" | "circle";
type ShapeConfig = {
	x: number;
	y: number;
};

const SHAPE_CONFIGS: Record<Shape, ShapeConfig> = {
	rectangle: { x: 3.5, y: 1.5 },
	circle: { x: 1.7, y: 1.4 },
};

export default function useFollowCursor(
	hoverRef: React.RefObject<HTMLElement | null>,
	targetRef: React.RefObject<HTMLElement | null>,
	shape: Shape = "rectangle"
) {
	useEffect(() => {
		const elHover = hoverRef?.current;
		const elTarget = targetRef?.current;
		if (!elHover || !elTarget) return;

		const shapeConfig = SHAPE_CONFIGS[shape];

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
	}, [hoverRef, targetRef, shape]);
}

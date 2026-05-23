// styles
import css from "./IconArrowCurve.module.css";

// types
import { Props } from "./IconArrowCurve.types";

export default function IconArrowCurve({
	color = "white",
	size = 12,
	direction = "down",
}: Props) {
	let appliedColor;
	let appliedDirection;

	// color
	if (color === "white") appliedColor = "var(--color-base)";
	else if (color === "black") appliedColor = "var(--color-gray)";
	else if (color === "gray") appliedColor = "var(--color-text-secondary)";
	else appliedColor = "var(--color-base)";

	// direction
	if (direction === "down") appliedDirection = {};
	else if (direction === "right")
		appliedDirection = { transform: "scaleX(-1)", rotate: "-90deg" };

	return (
		<svg
			width={size}
			height={size}
			style={appliedDirection}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={css.svg}
		>
			<path
				fill={appliedColor}
				d="M7.41551 16H10.7536L16 9.1H13.8545L9.13155 15.3913L4.40856 9.1H2.20001L7.41551 16Z"
			/>
			<path
				fill={appliedColor}
				d="M9.10132 15.9L8.17848 14.9L8.17848 1.73103L0 1.73103L8.01259e-08 0L10.0242 5.06639e-07V14.9L9.10132 15.9Z"
			/>
		</svg>
	);
}

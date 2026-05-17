// types
import { Props } from "./IconArrowShortCut.types";

export default function IconArrowShortCut({ color = "white" }: Props) {
	let appliedColor;

	if (color === "white") appliedColor = "var(--color-base)";
	else if (color === "black") appliedColor = "var(--color-gray-0)";
	else if (color === "gray") appliedColor = "var(--color-gray-400)";
	else appliedColor = "var(--color-base)";

	return (
		<svg
			width="16"
			height="8"
			viewBox="0 0 16 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill={appliedColor}
				d="M5.71593 8H10.2422L16 0H13.0909L8.04278 7.17462L2.99465 0H0L5.71593 8Z"
			/>
		</svg>
	);
}

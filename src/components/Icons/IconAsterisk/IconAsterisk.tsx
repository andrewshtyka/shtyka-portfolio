// types
import { Props } from "./IconAsterisk.types";

export default function IconAsterisk({ color = "white", size = 12 }: Props) {
	let appliedColor;

	if (color === "white") appliedColor = "var(--color-base)";
	else if (color === "black") appliedColor = "var(--color-gray)";
	else if (color === "gray") appliedColor = "var(--color-text-secondary)";
	else appliedColor = "var(--color-base)";

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill={appliedColor}
				d="M4.59452 16L2.05483 14.0635L5.70274 9.12557L0 7.31014L0.969697 4.18759L6.58009 6.26929L6.44156 0H9.58153L9.443 6.26929L15.0303 4.18759L16 7.31014L10.3203 9.12557L13.9221 14.0635L11.3824 16L8.01154 10.8684L4.59452 16Z"
			/>
		</svg>
	);
}

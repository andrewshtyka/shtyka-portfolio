// types
import { Props } from "./IconArrowLong.types";

export default function IconArrowLong({ color = "white" }: Props) {
    let appliedColor;

    if (color === "white") appliedColor = "var(--color-base)";
    else if (color === "black") appliedColor = "var(--color-gray)";
    else if (color === "gray") appliedColor = "var(--color-gray-500)";
    else appliedColor = "var(--color-base)";

    return (
			<svg
				width="16"
				height="48"
				viewBox="0 0 16 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill={appliedColor}
					d="M6.17939 0H9.77536L16 8.34783H13.5037L8.04625 0.861265L2.58881 8.34783H0L6.17939 0Z"
				/>
				<path d="M1.6 45.913H14.4V48H1.6V45.913Z" fill="#EBEDF5" />
				<path
					fill={appliedColor}
					d="M6.93333 48L6.93333 9.12238e-08L9.06667 0L9.06667 48H6.93333Z"
				/>
			</svg>
		);
}

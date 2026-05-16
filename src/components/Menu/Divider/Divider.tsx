// styles
import css from "./Divider.module.css";

// types
import { Props } from "./Divider.types";

export default function Divider({
	isHiddenOnMobile = false,
	isHorizontal = false,
}: Props) {
	const visibilityClass = isHiddenOnMobile ? "mob_hidden" : "";

	const classesContainer = `${css.container} ${visibilityClass} ${isHorizontal ? css.container_horizontal : css.container_vertical}`;
	const classesLine = `${css.line} ${visibilityClass} ${isHorizontal ? css.line_horizontal : css.line_vertical}`;

	return (
		<div className={classesContainer}>
			<div className={classesLine} />
		</div>
	);
}

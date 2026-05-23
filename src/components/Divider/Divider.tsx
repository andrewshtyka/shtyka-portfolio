// styles
import css from "./Divider.module.css";

// types
import { Props } from "./Divider.types";

export default function Divider({
	isHiddenOnMobile = false,
	isHorizontal = false,
	style = {},
	willHide = true,
}: Props) {
	const visibilityClass = isHiddenOnMobile ? "mob_hidden_768" : "";

	let classesContainer;

	if (willHide) {
		const classes = isHorizontal
			? `${css.container_horizontal} ${css.horizontal_padding}`
			: `${css.container_vertical} ${css.vertical_padding}`;

		classesContainer = `${visibilityClass} ${classes}`;
	} else {
		const classes = isHorizontal
			? `${css.container_horizontal}`
			: `${css.container_vertical}`;

		classesContainer = `${visibilityClass} ${classes}`;
	}

	const classesLine = `${css.line} ${visibilityClass} ${isHorizontal ? css.line_horizontal : css.line_vertical}`;

	return (
		<div className={classesContainer}>
			<div className={classesLine} style={style} />
		</div>
	);
}

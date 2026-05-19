// #region ============================== Imports
// styles
import IconArrowCurve from "../Icons/IconArrowCurve/IconArrowCurve";
import css from "./LinkText.module.css";

// types
import { Props } from "./LinkText.types";
// #endregion ===========================

export default function LinkText({
	href,
	children = "",
	hasIcon = true,
	iconSize = 16,
}: Props) {
	if (href && children) {
		return (
			<a href={href} className={css.link}>
				{hasIcon && (
					<span
						className={css.icon}
						style={{
							marginInline: iconSize / 2,
						}}
					>
						<IconArrowCurve direction="right" color="gray" size={iconSize} />
					</span>
				)}
				{children}
			</a>
		);
	} else return;
}

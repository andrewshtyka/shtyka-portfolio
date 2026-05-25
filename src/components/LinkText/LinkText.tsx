// #region ============================== Imports

// components
import IconArrowCurve from "../Icons/IconArrowCurve/IconArrowCurve";

// constants
import { LINK_ANIMATION } from "@/constants/animation";

// styles
import css from "./LinkText.module.css";

// types
import { Props } from "./LinkText.types";

// #endregion ===========================

export default function LinkText({
	href,
	children = "",
	hasIcon = true,
}: Props) {
	const styleTransition = {
		transitionTimingFunction: LINK_ANIMATION.ease,
		transitionDuration: LINK_ANIMATION.duration,
	};

	if (!href) {
		return <span>{children}</span>;
	}

	return (
		<a
			href={href}
			className={css.link}
			target="_blank"
			rel="noopener noreferrer"
			style={styleTransition}
		>
			{children}
			{hasIcon && (
				<span className={css.icon}>
					<IconArrowCurve color="accent" direction="right" size="0.7em" />
				</span>
			)}
		</a>
	);
}

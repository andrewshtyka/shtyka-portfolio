// #region ============================== Imports
// styles
import css from "./Mobile.module.css";

// types
import { Props } from "./Mobile.types";
import MenuButton from "@/components/MenuButton/MenuButton";

// #endregion ===========================

export default function Mobile({
	children,
	open,
	close,
	isMenuOpened,
	onClick = undefined,
}: Props) {
	const appliedNavClasses = isMenuOpened
		? `${css.children} bg_blur`
		: `${css.children}`;

	const menuOpenedButtonClass = isMenuOpened ? "invert_colors" : "";

	if (!open || !close) return null;

	return (
		<div className={css.container}>
			<MenuButton onClick={onClick} customClass={menuOpenedButtonClass}>
				{isMenuOpened ? close : open}
			</MenuButton>

			<span
				className={appliedNavClasses}
				style={{ display: isMenuOpened ? "flex" : "none" }}
			>
				{isMenuOpened && children}
			</span>
		</div>
	);
}

"use client";

// #region ============================== Imports

// components
import MenuButton from "@/components/MenuButton/MenuButton";

// styles
import css from "./ContainerMobile.module.css";

// types
import { Props } from "./ContainerMobile.types";

// utils
import { FocusOn } from "react-focus-on";
import React from "react";

// #endregion ===========================

export default function ContainerMobile({
	children,
	open,
	close,
	isMenuOpened,
	onClick = undefined,
}: Props) {
	const btnRef = React.useRef<HTMLButtonElement>(null);

	// closed
	if (!isMenuOpened)
		return (
			<div className={css.container}>
				<MenuButton ref={btnRef} onClick={onClick}>
					{open}
				</MenuButton>
			</div>
		);

	// opened
	return (
		<div className={css.container}>
			<FocusOn
				returnFocus={true}
				onClickOutside={onClick}
				onEscapeKey={onClick ? () => onClick() : undefined}
				onDeactivation={() => btnRef.current?.focus()}
				scrollLock={false}
				className={css.container}
			>
				<span className={`${css.children} bg_blur`} style={{ display: "flex" }}>
					{children}
				</span>

				<MenuButton onClick={onClick} customClass="invert_colors">
					{close}
				</MenuButton>
			</FocusOn>
		</div>
	);
}

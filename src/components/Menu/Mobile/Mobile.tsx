// #region ============================== Imports
"use client";

import React from "react";

// components
import MenuLinkPrimary from "@/components/MenuLinkPrimary/MenuLinkPrimary";

// styles
import css from "./Mobile.module.css";

// types
import { Props } from "./Mobile.types";
import MenuButton from "@/components/MenuButton/MenuButton";

// #endregion ===========================

export default function Mobile({ children, menuMobile }: Props) {
	const [isOpened, setIsOpened] = React.useState(false);

	function handleClick() {
		setIsOpened((currentIsOpened) => !currentIsOpened);
	}

	return (
		<div className={css.container}>
			<MenuButton onClick={handleClick}>{menuMobile}</MenuButton>
			<span
				className={css.children}
				style={{ display: isOpened ? "revert" : "none" }}
			>
				{isOpened && children}
			</span>
		</div>
	);
}

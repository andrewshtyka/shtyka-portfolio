"use client";

import React from "react";

// styles
import css from "./Mobile.module.css";

// types
import { Props } from "./Mobile.types";

export default function Mobile({ children, menuMobile }: Props) {
	const [isOpened, setIsOpened] = React.useState(false);
	return (
		<div className={css.container}>
			<button type="button" onClick={() => setIsOpened(!isOpened)}>
				{menuMobile}
			</button>
			{isOpened && children}
		</div>
	);
}

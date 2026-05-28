// styles
import css from "./Nav.module.css";

// types
import { Props } from "./Nav.types";

// utility
import React from "react";

export default function Nav({ uiString }: Props) {
	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);

	return <></>;
}

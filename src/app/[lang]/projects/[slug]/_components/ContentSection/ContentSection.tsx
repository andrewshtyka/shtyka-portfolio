// styles
import css from "./ContentSection.module.css";

// types
import { Props } from "./ContentSection.types";

// utility
import React from "react";

export default function ContentSection({
	uiContentString,
	uiEndString,
}: Props) {
	if (!uiContentString || typeof uiContentString !== "string") return;
	if (!uiEndString || typeof uiEndString !== "string") return;
	const ui = JSON.parse(uiContentString);
	const uiEnd = JSON.parse(uiEndString);

	return <></>;
}

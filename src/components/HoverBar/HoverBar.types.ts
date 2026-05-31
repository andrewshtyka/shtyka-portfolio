import React from "react";

export interface Props {
	refTarget: React.RefObject<
		HTMLDivElement | HTMLElement | HTMLLIElement | null
	>;
	title?: string;
	from?: "left" | "left top";
	shape?: "rectangle" | "circle";
}

import React from "react";

export interface Props {
	refTarget: React.RefObject<HTMLDivElement | HTMLElement | null>;
	title?: string;
	from?: "left" | "left top";
	shape?: "rectangle" | "circle";
}

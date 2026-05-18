"use client";

// components
import { Tooltip } from "radix-ui";

// constants
import { TOOLTIP_DELAY } from "@/constants/animation";

// types
import { Props } from "./TooltipProvider.types";

export function TooltipProvider({ children }: Props) {
	return (
		<Tooltip.Provider delayDuration={TOOLTIP_DELAY}>
			{children}
		</Tooltip.Provider>
	);
}

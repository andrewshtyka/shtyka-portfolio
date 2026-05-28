import { Variants, ViewportOptions } from "motion/react";

export interface Props {
	children: React.ReactNode;
	hasIcon?: boolean;
	variants?: Variants;
	viewport?: ViewportOptions;
}

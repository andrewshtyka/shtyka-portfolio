import { ItemContent } from "../ContentSection.types";

export interface Props {
	ui: ItemContent[];
	currentNum: number;
	totalNum: number;
	label: string;
}

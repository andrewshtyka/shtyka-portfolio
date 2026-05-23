import { LangType } from "@/types/lang.types";

export interface Props {
	lang: LangType;
	menu: string[];
	menuMobile: {
		open: string;
		close: string;
	};
}

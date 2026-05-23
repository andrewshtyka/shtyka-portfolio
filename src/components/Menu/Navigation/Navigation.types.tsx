import { LangType } from "@/types/lang.types";

export interface Props {
	menuItems: {
		item: string;
		key: string;
		id: string;
	}[];
	lang: LangType;
}

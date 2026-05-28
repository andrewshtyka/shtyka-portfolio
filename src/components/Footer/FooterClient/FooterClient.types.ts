export interface Props {
	ui?: Obj;
	lastUpdate: string | undefined;
	browserName: string | null;
	currentYear: string | undefined;
}

type Obj = {
	item1: string;
	item2: string;
	item3: string;
	item4: {
		title: string;
		content: string;
	};
	item5: string;
	item6: string;
};

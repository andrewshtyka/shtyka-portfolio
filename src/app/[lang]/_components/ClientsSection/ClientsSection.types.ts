export interface Props {
	uiString: string;
}

export type Element = {
	_key: string;
	_type: string;
	level: number;
	listItem: string;
	style: string;
	children: {
		_key: string;
		_type: string;
		text: string;
		marks: unknown[];
	}[];
	markDefs: unknown[];
};
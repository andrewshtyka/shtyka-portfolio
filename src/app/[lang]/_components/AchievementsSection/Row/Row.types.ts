export interface RowProps {
	_key?: string;
	num: number;
	achievement: string;
}

export type Item = {
	[key: string]: unknown;
};


export type Title = {
	_key: string;
	_type: string;
	text: string;
	marks: string[];
};
export interface Props {
	uiContentString: string;
	uiEndString: string;
}

export interface PropsContent {
	content: ItemContent[];
	_type: string;
	_key: string;
}

export type ItemContent = {
	_key: string;
	_type: string;

	style?: string;
	challenge?: string;
	solution?: string;

	markDefs?: unknown[];
	items?: Item[];
	children?: Child[];
};

export type Item = {
	items: {
		_key: string;
		_type: string;
		poster?: {
			_type: string;
			asset: {
				_type: string;
				_ref: string;
			};
		};
		video?: {
			_type: string;
			asset: {
				_type: string;
				_ref: string;
			};
		};
	}[];
	_key: string;
	_type: string;
};

export type Child = {
	_key: string;
	_type: string;
	marks: unknown[];
	text: string;
};

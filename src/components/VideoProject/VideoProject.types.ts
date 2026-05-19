export interface Props {
	video: Item;
	poster: Item;
}

type Item = {
	_type: string;
	asset: {
		_ref: string;
		_type: string;
	};
};

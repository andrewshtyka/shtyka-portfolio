export interface Props {
	logo: Item;
}

interface Item {
	alt: string;
	svg: {
		asset: {
			_ref: string;
			_type: string;
		};
		_type: string;
	};
}

export interface Props {
	video: Item;
	poster: Item;
	variant?: "fullscreen" | "preview";
}

type Item = {
	_type: string;
	asset: {
		_ref: string;
		_type: string;
	};
};

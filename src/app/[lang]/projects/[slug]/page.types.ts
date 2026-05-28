export interface NavLabel {
	content: Content[];
	_key: string;
	_type: string;
}

type Content = {
	[key: string]: any;
};

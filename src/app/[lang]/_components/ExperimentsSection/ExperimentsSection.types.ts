export interface Props {
	uiString: string;
	experimentsString: string;
}

export type Element = {
	_key: string;
	_type: string;
	isExperimentVisible: boolean;
	cardWidth: number;
	content: {
		description: string;
		title: string;
	};
	customId: 6;
	link: {
		link: string;
		title: string;
	};
	media: [
		{
			_key: string;
			_type: string;
			poster: unknown[];
			video: unknown[];
		},
	];
};

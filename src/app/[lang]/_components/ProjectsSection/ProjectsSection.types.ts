export interface Props {
	uiString: string;
	projectsString: string;
}

export type ProjectHome = {
	_id: string;
	about: {
		buttonTitle: string;
		description: string;
		link: string;
	};
	details: {
		_key: string;
		_type: string;
		content: unknown[];
	}[];
	heroVideo: {
		poster: {
			_type: string;
			asset: unknown[];
		};
		video: {
			_type: string;
			asset: unknown[];
		};
	};
	slug: {
		_type: string;
		current: string;
	};
	title: string;
};

export interface Props {
	lang: string;
	logo: LogoProps;
	menu: string[];
	menuMobile: string;
}

interface LogoProps {
	alt: string;
	svg: {
		asset: {
			_ref: string;
			_type: string;
		};
		_type: string;
	};
}

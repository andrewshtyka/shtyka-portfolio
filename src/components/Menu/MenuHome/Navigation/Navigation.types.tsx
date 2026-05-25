export interface Props {
	menuItems: {
		item: string;
		key: string;
		id: string;
	}[];
	lang: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

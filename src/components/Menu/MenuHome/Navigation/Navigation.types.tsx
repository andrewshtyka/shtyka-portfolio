export interface Props {
	menuItems: {
		item: string;
		key: string;
		id: string;
	}[];
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

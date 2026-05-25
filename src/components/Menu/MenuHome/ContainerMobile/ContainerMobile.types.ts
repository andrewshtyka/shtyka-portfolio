export interface Props {
	children: React.ReactNode;
	open: string;
	close: string;
	isMenuOpened?: boolean;
	onClick?: (
		event?: MouseEvent | TouchEvent | React.MouseEvent<HTMLButtonElement>
	) => void;
}

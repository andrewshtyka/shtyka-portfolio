export interface Props {
	children: React.ReactNode;
	open: string;
	close: string;
	isMenuOpened?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

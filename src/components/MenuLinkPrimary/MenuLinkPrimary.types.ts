export interface Props {
	children: React.ReactNode;
	href: string;
	isTransparent?: boolean;
	isButton?: boolean;
	scroll?: boolean;
	isActive?: boolean;
	onClick?: React.MouseEventHandler<HTMLElement>;
}

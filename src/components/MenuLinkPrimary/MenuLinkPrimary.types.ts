export interface PropsPrimary {
	children: React.ReactNode;
	isTransparent?: boolean;
	isActive?: boolean;
	onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface PropsSecondary {
	children: React.ReactNode;
	href: string;
	isTransparent?: boolean;
	scroll?: boolean;
	isActive?: boolean;
	onClick?: React.MouseEventHandler<HTMLElement>;
}

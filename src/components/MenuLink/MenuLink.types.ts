export interface PropsPrimary {
	children: string;
	layoutId?: string;
	isActive?: boolean;
	onClick?: React.MouseEventHandler<HTMLElement>;
	isTransparent?: boolean;
}

export interface PropsSecondary {
	children: React.ReactNode;
	href: string;
	isTransparent?: boolean;
	scroll?: boolean;
	onClick?: React.MouseEventHandler<HTMLElement>;
	icon?: React.ReactNode;
}

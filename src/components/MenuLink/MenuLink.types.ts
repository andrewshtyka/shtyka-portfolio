export interface PropsPrimary {
	children: string;
	layoutId?: string;
	isActive?: boolean;
	onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface PropsSecondary {
	children: React.ReactNode;
	href: string;
	scroll?: boolean;
	onClick?: React.MouseEventHandler<HTMLElement>;
	icon?: React.ReactNode;
	direction?: "top" | "right" | "left";
}

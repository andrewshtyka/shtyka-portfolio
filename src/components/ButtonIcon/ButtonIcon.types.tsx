export interface Props {
	children: React.ReactNode;
	direction?: "top" | "right";
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	isTransparent?: boolean;
}

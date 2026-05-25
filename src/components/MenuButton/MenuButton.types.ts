export interface Props {
	children: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	customClass?: string;
	ref?: React.RefObject<HTMLButtonElement | null>;
}

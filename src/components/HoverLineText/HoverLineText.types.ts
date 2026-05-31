export interface Props {
	refTarget: React.RefObject<
		HTMLDivElement | HTMLElement | HTMLLIElement | null
	>;
	title?: string;
	shape?: "line";
	speed?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

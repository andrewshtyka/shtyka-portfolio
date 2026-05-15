interface Props {
	obj: unknown;
}

export default function Footer({ obj }: Props) {
	if (!obj || typeof obj !== "object") return;

	return <></>;
}

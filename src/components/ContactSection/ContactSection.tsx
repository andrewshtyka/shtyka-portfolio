interface Props {
	message: unknown[];
	title: unknown[];
	video: unknown;
}

export default function ContactSection({ message, title, video }: Props) {
	if (!Array.isArray(message)) return null;
	if (!Array.isArray(title)) return null;
	if (!video || typeof video !== "object") return;

	return <></>;
}

interface Props {
	uiString: string;
}

export default function ClientsSection({ uiString }: Props) {
	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);

	return <></>;
}

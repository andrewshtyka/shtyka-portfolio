interface Props {
	uiString: string;
	experimentsString: string;
}

export default function ExperimentsSection({
	experimentsString,
	uiString,
}: Props) {
	if (!experimentsString || typeof experimentsString !== "string") return;
	if (!uiString || typeof uiString !== "string") return;

	const experiments = JSON.parse(experimentsString);
	const [ui, buttonTitle] = JSON.parse(uiString);

	return <></>;
}

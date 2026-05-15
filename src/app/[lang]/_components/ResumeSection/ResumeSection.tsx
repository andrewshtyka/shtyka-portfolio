interface Props {
	uiString: string;
}

export default function ResumeSection({ uiString }: Props) {
	if (!uiString || typeof uiString !== "string") return;
	const [ui, file] = JSON.parse(uiString);

	return <></>;
}

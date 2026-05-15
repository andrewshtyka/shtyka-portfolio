interface Props {
	uiString: string;
}

export default function AchievementsSection({ uiString }: Props) {
	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);

	return <></>;
}

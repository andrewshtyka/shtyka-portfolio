interface Props {
	uiString: string;
	projectsString: string;
}

export default function ProjectsSection({ projectsString, uiString }: Props) {
	if (!projectsString || typeof projectsString !== "string") return;
	if (!uiString || typeof uiString !== "string") return;

	const ui = JSON.parse(uiString);
	const projects = JSON.parse(projectsString);

	return <></>;
}

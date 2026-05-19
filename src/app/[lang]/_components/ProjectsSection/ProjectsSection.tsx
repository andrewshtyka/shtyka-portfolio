// components
import IconArrowShortCut from "@/components/Icons/IconArrowShortCut/IconArrowShortCut";
import Card from "./Card/Card";

// styles
import css from "./ProjectsSection.module.css";

// types
import { Props } from "./ProjectsSection.types";

export default function ProjectsSection({ projectsString, uiString }: Props) {
	if (!projectsString || typeof projectsString !== "string") return;
	if (!uiString || typeof uiString !== "string") return;

	const ui = JSON.parse(uiString);
	const projects = JSON.parse(projectsString);

	const dataTitle = {
		title_1: ui[0]?.children[0].text ?? "",
		title_2: ui[1]?.children[0].text ?? "",
	};

	const dataProjects = projects.map((project: any) => {
		return {
			data: { ...project },
			key: project._id,
		};
	});

	// TODO
	// Replace "any" type

	return (
		<section className={css.container}>
			{/* title */}
			<div className={css.container_title}>
				<span className={css.icons}>
					<IconArrowShortCut direction="up" />
					<IconArrowShortCut direction="up" />
				</span>

				<h2 className={css.h2}>
					<span className={`${css.title_1} f_serif_primary`}>
						{dataTitle.title_1}
					</span>
					<span className="f_serif_primary f_italic">{dataTitle.title_2}</span>
				</h2>
			</div>

			{/* projects */}
			<ul className={css.list}>
				{dataProjects.map(({ key, data }: { key: string; data: string }) => (
					<Card key={key} uiString={JSON.stringify(data)} />
				))}
			</ul>
		</section>
	);
}

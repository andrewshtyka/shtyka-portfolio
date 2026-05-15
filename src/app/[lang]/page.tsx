import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/lib/client";
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";
import Link from "next/link";

const PROJECTS_QUERY = `*[_type == "project" && language == $lang]`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage({
	params,
}: {
	params: Promise<{ lang: string }>;
}) {
	const { lang } = await params;
	const projects = await client.fetch<SanityDocument[]>(
		PROJECTS_QUERY,
		{ lang },
		options
	);
	console.log(projects);

	return (
		<main>
			<LangSwitcher currentLang={lang} />
			<h1>Projects</h1>
			<ul>
				{projects.map((project) => (
					<li className="hover:underline" key={project._id}>
						<h2 className="text-xl font-semibold">{project.title}</h2>
						<Link href={`/${lang}/projects/${project.slug.current}`}>
							{project.about.buttonTitle}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}

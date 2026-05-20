// styles
import IconAsterisk from "@/components/Icons/IconAsterisk/IconAsterisk";
import css from "./ExperimentsSection.module.css";

// types
import { Props } from "./ExperimentsSection.types";
import Card from "./Card/Card";

export default function ExperimentsSection({
	experimentsString,
	uiString,
}: Props) {
	if (!experimentsString || typeof experimentsString !== "string") return;
	if (!uiString || typeof uiString !== "string") return;

	const experiments = JSON.parse(experimentsString).reverse();
	const ui = JSON.parse(uiString);

	// TODO
	// Replace "any" type

	const processedExperiments = experiments.map((item: any) => {
		return {
			data: { ...item },
			key: item._key,
		};
	});

	return (
		<section className={css.container}>
			{/* title */}
			<>
				<h2 className={`${css.title} f_serif_primary`}>
					{ui[0]?.children.map(
						({ _key, text }: { _key: string; text: string }, i: number) => {
							const appliedClass = i === 1 ? "f_italic" : "";
							return (
								<span className={appliedClass} key={_key}>
									{text ?? ""}
								</span>
							);
						}
					)}
				</h2>
				<p className={`${css.subtitle} f_mono`}>
					{ui[1]?.children[0]?.text ?? ""}
				</p>
				<div className={css.icons}>
					<IconAsterisk size={10} />
					<IconAsterisk size={10} />
				</div>
			</>

			{/* content */}
			<ul className={css.grid}>
				{processedExperiments.map(
					({ key, data }: { key: string; data: unknown }) => (
						<Card key={key} data={data} />
					)
				)}
			</ul>
		</section>
	);
}

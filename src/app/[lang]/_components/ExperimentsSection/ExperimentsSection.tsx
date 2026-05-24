// #region ============================== Imports

// components
import Card from "./Card/Card";
import DotsBg from "@/components/DotsBg/DotsBg";

// constants
import { HOME_SECTIONS } from "@/constants/sectionNames";

// styles
import IconAsterisk from "@/components/Icons/IconAsterisk/IconAsterisk";
import css from "./ExperimentsSection.module.css";

// types
import { Element, Props } from "./ExperimentsSection.types";

// #endregion ===========================

export default function ExperimentsSection({
	experimentsString,
	uiString,
}: Props) {
	if (!experimentsString || typeof experimentsString !== "string") return;
	if (!uiString || typeof uiString !== "string") return;

	const experiments = JSON.parse(experimentsString).reverse();
	const ui = JSON.parse(uiString);

	const processedExperiments = experiments.map((item: Element) => {
		return {
			data: { ...item },
			key: item._key,
		};
	});

	return (
		<section id={HOME_SECTIONS.experiments} className={css.container}>
			<DotsBg />

			<div className={css.content}>
				{/* title */}
				<>
					<h2 className={`${css.title} f_serif_primary`}>
						{ui[0]?.children?.map(
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
			</div>
		</section>
	);
}

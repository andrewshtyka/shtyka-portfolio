// styles
import ListItem from "@/components/ListItem/ListItem";
import css from "./ClientsSection.module.css";

// types
import { Element, Props } from "./ClientsSection.types";

export default function ClientsSection({ uiString }: Props) {
	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);

	const dataTitle = {
		title_1: ui?.[0].children[0].text ?? "",
		title_2: ui?.[1].children[0].text ?? "",
	};

	const dataClients = ui?.slice(2).map((item: Element) => {
		return {
			key: item._key ?? "",
			text: item.children[0].text ?? "",
		};
	});

	return (
		<section className={css.container}>
			<h2 className={css.h2}>
				<span className={`${css.title_1} f_serif_secondary`}>
					{dataTitle.title_1}
				</span>
				<span className={`${css.title_2} f_serif_secondary f_italic`}>
					{dataTitle.title_2}
				</span>
			</h2>

			<ul className={css.list}>
				{dataClients.map(({ key, text }: { key: string; text: string }) => (
					<ListItem key={key}>{text}</ListItem>
				))}
			</ul>
		</section>
	);
}

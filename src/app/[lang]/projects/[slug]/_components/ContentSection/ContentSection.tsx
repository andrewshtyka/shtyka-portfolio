"use client";

// components
import ItemContent from "./ItemContent/ItemContent";
import IconAsterisk from "@/components/Icons/IconAsterisk/IconAsterisk";

// styles
import css from "./ContentSection.module.css";

// types
import { Props } from "./ContentSection.types";
import { PropsContent } from "./ContentSection.types";

// utility
import React from "react";

export default function ContentSection({
	uiContentString,
	uiEndString,
}: Props) {
	if (!uiContentString || typeof uiContentString !== "string") return;
	if (!uiEndString || typeof uiEndString !== "string") return;
	const ui = JSON.parse(uiContentString);
	const uiEnd = JSON.parse(uiEndString);

	if (ui?.content?.length < 1) return null;

	const titleArr = ui?.title?.split(" ") ?? "";

	return (
		<section className={css.container}>
			{/* title */}
			<h2 className={css.h2}>
				<span className={`${css.title_1} f_serif_primary`}>{titleArr[0]}</span>
				<div className={css.container_title}>
					<span className={`${css.title_2} f_serif_secondary`}>
						{titleArr[1]}
					</span>
					<span className={`${css.title_3} f_serif_primary f_italic`}>
						{titleArr[2]}
					</span>
				</div>
			</h2>

			{/* content */}
			<ul className={css.list}>
				{ui?.content?.map(({ _key, content }: PropsContent, i: number) => (
					<ItemContent
						key={_key}
						ui={content}
						currentNum={i + 1}
						totalNum={ui?.content?.length}
						label={ui?.label}
					/>
				))}
			</ul>

			{/* end */}
			<div className={css.end_container}>
				<IconAsterisk size={8} />
				<span className={`${css.end_title} f_mono`}>{uiEnd?.title}</span>
				<IconAsterisk size={8} />
			</div>
		</section>
	);
}

// styles
import { lockfileTryAcquire } from "next/dist/build/swc/generated-native";
import css from "./ContentSection.module.css";

// types
import { Props } from "./ContentSection.types";

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

	// console.log(ui);
	const titleArr = ui?.title.split(" ");

	return (
		<section className={css.container}>
			{/* title */}
			<div className={css.content}>
				<h2>
					<span className={`${css.title_1} f_serif_primary`}>
						{titleArr[0]}
					</span>
					<div className={css.container_title}>
						<span className={`${css.title_2} f_serif_secondary`}>
							{titleArr[1]}
						</span>
						<span className={`${css.title_3} f_serif_primary f_italic`}>
							{titleArr[2]}
						</span>
					</div>
				</h2>
			</div>
		</section>
	);
}

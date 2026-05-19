// #region ============================== Imports
// components
import Row from "./Row/Row";

// styles
import css from "./AchievementsSection.module.css";

// types
import { Props } from "./AchievementsSection.types";
import { RowProps } from "./Row/Row.types";

// #endregion ===========================

export default function AchievementsSection({ uiString }: Props) {
	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);

	return (
		<section className={css.container}>
			<h2 className={`${css.title} f_serif_secondary`}>{ui?.title}</h2>
			<div>
				{ui?.table.map(({ _key, achievement }: RowProps, i: number) => (
					<Row
						key={_key}
						achievement={JSON.stringify(achievement)}
						num={i + 1}
					/>
				))}
			</div>
		</section>
	);
}

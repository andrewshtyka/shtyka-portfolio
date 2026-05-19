// #region ============================== Imports
// components
import Row from "./Row/Row";

// styles
import css from "./ExperienceSection.module.css";

// types
import { RowProps } from "./Row/Row.types";
import { Props } from "./ExperienceSection.types";

// #endregion ===========================

export default function ExperienceSection({ uiString }: Props) {
	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);

	return (
		<section className={css.container}>
			<h2 className={`${css.title} f_serif_secondary`}>{ui?.title}</h2>

			<div>
				{/* head */}
				<div className={css.grid}>
					<span className={`${css.table_head_item} f_mono`}>
						{ui?.header.col1}
					</span>
					<span className={`${css.table_head_item} f_mono`}>
						{ui?.header.col2}
					</span>
				</div>

				{/* body */}
				{ui?.table.map(({ _key, years, duration, role, company }: RowProps) => (
					<Row
						key={_key}
						years={years}
						duration={duration}
						role={role}
						company={company}
					/>
				))}
			</div>
		</section>
	);
}

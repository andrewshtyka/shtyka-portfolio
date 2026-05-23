// styles

import css from "./Row.module.css";

// types
import { RowProps } from "./Row.types";

export default function Row({
	duration = "",
	years = "",
	role = "",
	company = "",
}: RowProps) {
	return (
		<>
			<div className={css.line}></div>

			<div className={`${css.grid} ${css.distance}`}>
				{/* col 1 */}
				<div className={css.col_left}>
					<span className={`${css.years} f_mono`}>
						<span>{years}</span>
					</span>
					<span className={`${css.duration} f_mono`}>
						<span>{duration}</span>
					</span>
				</div>

				{/* col 2 */}
				<div className={css.col_right}>
					<span className={`${css.role} f_display_body`}>{role}</span>
					<span className={`${css.company} f_display_body`}>{company}</span>
				</div>
			</div>
		</>
	);
}

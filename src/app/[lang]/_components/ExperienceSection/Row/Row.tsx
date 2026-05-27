// animation
import { motion } from "motion/react";

// constants
import { SECTION_EXPERIENCE_ANIMATION } from "@/constants/animation";

// styles
import css from "./Row.module.css";

// types
import { RowProps } from "./Row.types";

export default function Row({
	duration = "",
	years = "",
	role = "",
	company = "",
	num = 0,
}: RowProps) {
	return (
		<>
			{/* divider */}
			<motion.div
				className={css.line}
				variants={SECTION_EXPERIENCE_ANIMATION.divider}
				initial="initial"
				whileInView="animate"
				transition={{
					...SECTION_EXPERIENCE_ANIMATION.divider.transition,
					delay: SECTION_EXPERIENCE_ANIMATION.divider.transition.delay(num - 1),
				}}
				viewport={SECTION_EXPERIENCE_ANIMATION.divider.viewport}
			></motion.div>

			<div className={`${css.grid} ${css.distance}`}>
				{/* col 1 */}
				<div className={css.col_left}>
					<motion.span
						className={`${css.years} f_mono`}
						variants={SECTION_EXPERIENCE_ANIMATION.line}
						initial="initial"
						whileInView="animate"
						transition={{
							...SECTION_EXPERIENCE_ANIMATION.line.transition,
							delay: SECTION_EXPERIENCE_ANIMATION.line.transition.delay(
								num - 1
							),
						}}
						viewport={SECTION_EXPERIENCE_ANIMATION.line.viewport}
					>
						<span>{years}</span>
					</motion.span>
					<motion.span
						className={`${css.duration} f_mono`}
						variants={SECTION_EXPERIENCE_ANIMATION.line}
						initial="initial"
						whileInView="animate"
						transition={{
							...SECTION_EXPERIENCE_ANIMATION.line.transition,
							delay: SECTION_EXPERIENCE_ANIMATION.line.transition.delay(
								num - 1
							),
						}}
						viewport={SECTION_EXPERIENCE_ANIMATION.line.viewport}
					>
						<span>{duration}</span>
					</motion.span>
				</div>

				{/* col 2 */}
				<div className={css.col_right}>
					<motion.span
						// ref={refRole}
						className={`${css.role} f_display_body`}
						variants={SECTION_EXPERIENCE_ANIMATION.line}
						initial="initial"
						whileInView="animate"
						transition={{
							...SECTION_EXPERIENCE_ANIMATION.line.transition,
							delay: SECTION_EXPERIENCE_ANIMATION.line.transition.delay(
								num - 1
							),
						}}
						viewport={SECTION_EXPERIENCE_ANIMATION.line.viewport}
					>
						{role}
					</motion.span>
					<motion.span
						// ref={refCompany}
						className={`${css.company} f_display_body`}
						variants={SECTION_EXPERIENCE_ANIMATION.line}
						initial="initial"
						whileInView="animate"
						transition={{
							...SECTION_EXPERIENCE_ANIMATION.line.transition,
							delay: SECTION_EXPERIENCE_ANIMATION.line.transition.delay(
								num - 1
							),
						}}
						viewport={SECTION_EXPERIENCE_ANIMATION.line.viewport}
					>
						{company}
					</motion.span>
				</div>
			</div>
		</>
	);
}

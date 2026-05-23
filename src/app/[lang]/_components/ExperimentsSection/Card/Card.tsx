// #region ============================== Imports

// components
import ButtonSecondary from "@/components/ButtonSecondary/ButtonSecondary";
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";
import MediaComponent from "../MediaComponent/MediaComponent";

// styles
import css from "./Card.module.css";

// types
import { Props } from "./Card.types";

// utility
import { getStyles } from "./lib/helpers/getStyles";

// #endregion ===========================

export default function Card({ data }: Props) {
	if (!data) return null;

	return (
		<article className={css.article} style={getStyles(data?.cardWidth)}>
			{/* media */}
			<div className={css.container_media}>
				<MediaComponent uiString={JSON.stringify(data?.media[0])} />
			</div>

			{/* top */}
			<div className={css.top}>
				{data?.link && (
					<ButtonSecondary
						href={data?.link?.link}
						icon={<IconArrowCurve direction="right" size={10} />}
					>
						{data?.link?.title}
					</ButtonSecondary>
				)}
			</div>
			{/* bottom */}
			<div>
				<h3 className={`${css.title} f_display_body`}>
					{data?.content?.title ?? ""}
				</h3>
				<p className={`${css.subtitle} f_mono`}>
					{data?.content?.description ?? ""}
				</p>
			</div>
		</article>
	);
}

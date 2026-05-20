// #region ============================== Imports

// components
import VideoProject from "@/components/VideoProject/VideoProject";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";
import Divider from "@/components/Divider/Divider";

// styles
import css from "./Card.module.css";

// types
import { Props } from "./Card.types";

// utils
import processDetailsData from "./lib/helpers/processDetailsData";
import ListItem from "@/components/ListItem/ListItem";

// #endregion ===========================

export default function Card({ uiString, buttonTitle = "" }: Props) {
	const ui = JSON.parse(uiString);

	const details_1 = processDetailsData(ui?.details[0]?.content);
	const details_2 = processDetailsData(ui?.details[1]?.content);
	const details_3 = processDetailsData(ui?.details[2]?.content);

	return (
		<li className={css.container}>
			{/* video */}
			<div className={css.container_video}>
				<VideoProject video={ui.heroVideo.video} poster={ui.heroVideo.poster} />
			</div>

			{/* details */}
			<div className={css.container_details}>
				{/* title */}
				<div className={css.top}>
					<h3 className={`${css.title} f_serif_primary`}>{ui?.title ?? ""}</h3>
					<h4 className={`${css.subtitle} f_display_buttons`}>
						{ui?.about?.description ?? ""}
					</h4>
				</div>

				<Divider isHorizontal={true} willHide={false} />

				{/* details */}
				<div className={css.bottom}>
					{/* col 1 */}
					<div className={css.column_1}>
						<h5 className={`${css.column_title} f_mono`}>
							{details_1?.title ?? ""}
						</h5>
						<ul className={css.list}>
							{details_1?.items.map(({ key, item }) => (
								<ListItem key={key}>{item}</ListItem>
							))}
						</ul>
					</div>

					{/* col 2 */}
					<div className={css.column_2}>
						<h5 className={`${css.column_title} f_mono`}>
							{details_2?.title ?? ""}
						</h5>
						<ul className={css.list}>
							{details_2?.items.map(({ key, item }) => (
								<ListItem key={key}>{item}</ListItem>
							))}
						</ul>
					</div>

					{/* col 3 */}
					<div className={`${css.column_3} ${css.right}`}>
						<h5 className={`${css.column_title} f_mono`}>
							{details_3?.title ?? ""}
						</h5>
						<ul className={css.list}>
							{details_3?.items.map(({ key, item }) => (
								<ListItem key={key} hasIcon={false}>
									{item}
								</ListItem>
							))}
						</ul>
					</div>
				</div>

				{/* button */}
				<ButtonPrimary
					href={`/projects/${ui?.slug?.current}`}
					icon={<IconArrowCurve color="black" direction="right" />}
				>
					{buttonTitle}
				</ButtonPrimary>
			</div>
		</li>
	);
}

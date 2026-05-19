// #region ============================== Imports
// components
import TooltipImage from "@/components/TooltipImage/TooltipImage";

// styles
import LinkText from "@/components/LinkText/LinkText";
import css from "./Row.module.css";

// types
import { RowProps } from "./Row.types";
import getUrlForImage from "@/lib/util/getUrlForImage";
// #endregion ===========================

export default function Row({ achievement, num }: RowProps) {
	const ui = JSON.parse(achievement);

	const data = {
		titleArr: ui[0]?.children ?? "",
		subtitleArr: ui[1]?.children ?? "",
		hrefArr: ui[1]?.markDefs ?? "",
		srcArr: ui.slice(2).length > 0 && ui.slice(2),
	};

	// URLs for images (last achievement)
	let imgUrl_1: string;
	let imgUrl_2: string;
	let imgAlt_1: string;
	let imgAlt_2: string;

	if (data.srcArr) {
		imgUrl_1 = getUrlForImage(data.srcArr[0].image)?.url() ?? "";
		imgUrl_2 = getUrlForImage(data.srcArr[1].image)?.url() ?? "";

		imgAlt_1 = data.srcArr[0].alt;
		imgAlt_2 = data.srcArr[1].alt;
	}

	return (
		<>
			<div className={css.line}></div>

			<div className={`${css.grid} ${css.distance}`}>
				{/* number */}
				<div className={css.col_left}>
					<span className={`${css.num} f_mono`}>{`0${num}.`}</span>
				</div>

				<div className={css.col_right}>
					{/* title */}
					{data.titleArr.map((item: any, i: number) => {
						return (
							<span key={i} className={`${css.title} f_display_body`}>
								{item.text}
							</span>
						);
					})}

					{/* subtitle */}
					<span className={`${css.subtitle} f_display_body`}>
						{data.subtitleArr.map((item: any, i: number) => {
							if (data.hrefArr.length > 0) {
								// link
								return (
									<LinkText key={i} href={data.hrefArr[0].href} iconSize={12}>
										{item.text}
									</LinkText>
								);
							} else if (item.marks[0] === "code") {
								// image
								if (i === 1) {
									return (
										<TooltipImage key={i} src={imgUrl_1} alt={imgAlt_1}>
											{item.text}
										</TooltipImage>
									);
								} else if (i === 3) {
									return (
										<TooltipImage key={i} src={imgUrl_2} alt={imgAlt_2}>
											{item.text}
										</TooltipImage>
									);
								}
							} else {
								// plain text
								return (
									<span key={i} className={`${css.subtitle} f_display_body`}>
										{item.text}
									</span>
								);
							}
						})}
					</span>
				</div>
			</div>
		</>
	);
}

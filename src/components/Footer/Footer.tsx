// components
import Divider from "../Divider/Divider";
import Dimensions from "./Dimensions/Dimensions";

// styles
import css from "./Footer.module.css";

// types
import { Props } from "./Footer.types";

// utils
import { headers } from "next/headers";
import Emblem from "../Icons/Emblem/Emblem";

export default async function Footer({ obj: ui }: Props) {
	if (!ui || typeof ui !== "object") return;

	// TODO
	// Make todays' date in user language (currently only ENG)

	// get browser name (from proxy.ts)
	const headersList = await headers();
	const browserName = headersList.get("x-browser-name");

	// last website update
	const lastUpdate: string = new Intl.DateTimeFormat("en-US", {
		month: "long",
		year: "numeric",
	}).format(new Date());

	// current year
	const currentYear: string = new Intl.DateTimeFormat("en-US", {
		year: "numeric",
	}).format(new Date());

	return (
		<footer className={css.container}>
			<Divider isHorizontal={true} willHide={false} />

			{/* 
			TODO
			Center titles and content - in "top"
			*/}

			{/* top */}
			<ul className={css.list_top}>
				{/* update */}
				<li className={css.list_top_item_1}>
					<h4 className={`${css.title} f_mono`}>{ui.item1 ?? ""}</h4>
					<p className="f_display_caption">{lastUpdate}</p>
				</li>

				{/* browser */}
				<li className={css.list_top_item_2}>
					<h4 className={`${css.title} f_mono`}>{ui.item2 ?? ""}</h4>
					<p className="f_display_caption">{browserName}</p>
				</li>

				{/* dimensions */}
				<li className={css.list_top_item_3}>
					<h4 className={`${css.title} f_mono`}>{ui.item3 ?? ""}</h4>
					<p className="f_display_caption">
						<Dimensions />
					</p>
				</li>

				{/* made in */}
				<li className={css.list_top_item_4}>
					<h4 className={`${css.title} f_mono`}>{ui.item4.title ?? ""}</h4>
					<p className="f_display_caption">{ui.item4.content ?? ""}</p>
				</li>
			</ul>

			<Divider isHorizontal={true} willHide={false} />

			{/* bottom */}
			<ul className={css.list_bottom}>
				<li className={css.list_bottom_item_1}>
					<span className={`${css.title} f_mono`}>{ui.item5 ?? ""}</span>
				</li>

				<li className={css.list_bottom_item_2}>
					<Emblem color="gray" isFit={true} />
				</li>

				<li className={css.list_bottom_item_3}>
					<span className={`${css.title} f_mono`}>
						{currentYear} • {ui.item6 ?? ""}
					</span>
				</li>
			</ul>
		</footer>
	);
}

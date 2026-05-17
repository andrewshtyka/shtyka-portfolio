// #region ============================== Imports
// sanity
import { urlFor } from "@/sanity/lib/image";

// styles
import css from "./AboutSection.module.css";

// types
import getUrlForImage from "@/lib/util/getUrlForImage";
import { Props } from "./AboutSection.types";

// utils
import Image from "next/image";

// #endregion ===========================

export default function AboutSection({ uiString }: Props) {
	if (!uiString || typeof uiString !== "string") return;

	// #region ============================== CMS Data processing

	const ui = JSON.parse(uiString);
	const imgSrc = getUrlForImage(ui.images[0].image)?.url() ?? "";

	const paragraph_1 = {
		text_1: ui.message[0].children[0].text,
		text_2: {
			src: imgSrc,
			alt: ui.images[0].alt,
			text: ui.message[0].children[1].text,
		},
		text_3: ui.message[0].children[2].text,
	};

	const paragraph_2 = {
		text_1: ui?.message[1].children[0].text,
		text_2: {
			href: ui.message[1].markDefs[0].href,
			text: ui.message[1].children[1].text,
		},
		text_3: ui.message[1].children[2].text,
	};

	const paragraph_3 = {
		text_1: ui.message[2].children[0].text,
		text_2: {
			href: ui.message[2].markDefs[0].href,
			text: ui.message[2].children[1].text,
		},
		text_3: ui.message[2].children[2].text,
	};

	const srcSvg = urlFor(ui.svg.svg)?.url() ?? "";

	console.log(ui);

	// #endregion ===========================

	return (
		<section className={`${css.container} content_padding_limit`}>
			<div className={css.content}>
				{/* Paragraph 1 */}
				<p className={`${css.p} f_display_subtitle`}>
					{paragraph_1.text_1}
					<span>
						{/*
						TODO
						1. Add link component
						https://www.radix-ui.com/primitives/docs/components/tooltip
						 */}

						{/*
						TODO
						2. Wrap with a tooltip:
						https://www.radix-ui.com/primitives/docs/components/tooltip
						 */}
						<a href={paragraph_1.text_2.src}>{paragraph_1.text_2.text}</a>
					</span>
					{paragraph_1.text_3}
				</p>

				{/* Paragraph 2 */}
				<p className={`${css.p} f_display_subtitle`}>
					{paragraph_2.text_1}
					<span>
						<a href={paragraph_2.text_2.href}>{paragraph_2.text_2.text}</a>
					</span>
					{paragraph_2.text_3}
				</p>

				{/* Paragraph 3 */}
				<p className={`${css.p} f_display_subtitle`}>
					{paragraph_3.text_1}
					<span>
						<a href={paragraph_3.text_2.href}>{paragraph_3.text_2.text}</a>
					</span>
					{paragraph_3.text_3}
				</p>

				{/* Sign */}
				<div className={css.container_details}>
					<span className={css.container_image}>
						<Image
							src={srcSvg}
							alt={ui.svg.alt}
							width="165"
							height="72"
							unoptimized={true}
							className={css.image}
						/>
					</span>

					<p className={`${css.details} f_mono`}>
						{ui.details[0].children[0].text}
					</p>
					<p className={`${css.details} f_mono`}>
						{ui.details[1].children[0].text}
					</p>
				</div>
			</div>
		</section>
	);
}

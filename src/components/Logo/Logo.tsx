// components
import Image from "next/image";
import Link from "next/link";

// sanity
import { urlFor } from "@/sanity/lib/image";

// styles
import css from "./Logo.module.css";

// types
import { Props } from "./Logo.types";

export default function Logo({ logo }: Props) {
	const srcLogo = urlFor(logo.svg)?.url() ?? "";

	return (
		<Link href="/" className={css.link}>
			<Image
				src={srcLogo}
				alt={logo.alt}
				width="31"
				height="20"
				unoptimized={true}
				className={css.image}
			/>
		</Link>
	);
}

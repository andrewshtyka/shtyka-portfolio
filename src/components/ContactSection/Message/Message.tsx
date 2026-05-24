// components
import LinkText from "@/components/LinkText/LinkText";

// types
import { ItemMaster } from "./Message.types";

export default function Message({ arr }: { arr: ItemMaster[] | null }) {
	if (!Array.isArray(arr)) return null;

	return (
		<>
			{arr.map((item: ItemMaster, i: number) => {
				const hasIcon = item?.href?.includes("https");

				if (!item?.isLink) {
					// is plain text
					return <span key={i}>{item?.text}</span>;
				} else {
					if (!item?.fileName) {
						// is link to website (not a file)
						return (
							<LinkText key={i} href={item?.href} hasIcon={hasIcon}>
								{item?.text}
							</LinkText>
						);
					} else {
						// is link to file
						const appliedHref = `${item?.href}/${item?.fileName}`;

						return (
							<LinkText key={i} href={appliedHref}>
								{item?.text}
							</LinkText>
						);
					}
				}
			})}{" "}
		</>
	);
}

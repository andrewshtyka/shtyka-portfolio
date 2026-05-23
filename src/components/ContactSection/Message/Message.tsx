// components
import LinkText from "@/components/LinkText/LinkText";

// types
import { ItemMaster } from "./Message.types";

export default function Message({ arr }: { arr: ItemMaster[] | null }) {
	if (!Array.isArray(arr)) return null;

	return (
		<>
			{arr.map((item: ItemMaster, i: number) => {
				if (!item?.isLink) {
					return <span key={i}>{item?.text}</span>;
				} else {
					if (!item?.fileName) {
						return (
							<LinkText key={i} href={item?.href} hasIcon={false}>
								{item?.text}
							</LinkText>
						);
					} else {
						const appliedHref = `${item?.href}/${item?.fileName}`;

						return (
							<LinkText key={i} href={appliedHref} hasIcon={false}>
								{item?.text}
							</LinkText>
						);
					}
				}
			})}{" "}
		</>
	);
}

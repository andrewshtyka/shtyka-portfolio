import LinkText from "@/components/LinkText/LinkText";
import React from "react";

export default function Message({ arr }: any) {
	return (
		<>
			{arr.map((item: any, i: number) => {
				if (!item.isLink) {
					return <span key={i}>{item.text ?? ""}</span>;
				} else {
					if (!item.fileName) {
						return (
							<LinkText key={i} href={item.href} hasIcon={false}>
								{item.text ?? ""}
							</LinkText>
						);
					} else {
						const appliedHref = `${item.href}/${item.fileName}`;

						return (
							<LinkText key={i} href={appliedHref} hasIcon={false}>
								{item.text ?? ""}
							</LinkText>
						);
					}
				}
			})}{" "}
		</>
	);
}

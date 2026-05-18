// components
import { Tooltip } from "radix-ui";
import LinkText from "../LinkText/LinkText";

// styles
import css from "./TooltipImage.module.css";

// types
import { Props } from "./TooltipImage.types";
import Image from "next/image";

export default function TooltipImage({ children, src, alt }: Props) {
	return (
		<Tooltip.Root>
			<Tooltip.Trigger asChild>
				<LinkText type="tooltip">{children}</LinkText>
			</Tooltip.Trigger>
			<Tooltip.Portal>
				<Tooltip.Content>
					<span className={css.container_image}>
						<Image
							src={src}
							alt={alt}
							sizes="100%"
							fill={true}
							preload={true}
							className={css.image}
						/>
					</span>
				</Tooltip.Content>
			</Tooltip.Portal>
		</Tooltip.Root>
	);
}

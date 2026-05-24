"use client";

// #region ============================== Imports
// components
import { Tooltip } from "radix-ui";
import Image from "next/image";

// styles
import css from "./TooltipImage.module.css";

// types
import { Props } from "./TooltipImage.types";

// utils
import React from "react";

// #endregion ===========================

export default function TooltipImage({
	children = "",
	src = "",
	alt = "",
}: Props) {
	const [open, setOpen] = React.useState(false);

	function handleTooltipClick() {
		setOpen((prev) => !prev);
	}

	return (
		<Tooltip.Root open={open} onOpenChange={setOpen}>
			<Tooltip.Trigger onClick={handleTooltipClick} asChild>
				{src ? (
					<a
						href=""
						onClick={(e) => {
							e.preventDefault();
						}}
						className={css.link}
					>
						{children}
					</a>
				) : (
					<span>{children}</span>
				)}
			</Tooltip.Trigger>

			<Tooltip.Portal>
				<Tooltip.Content>
					{src && (
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
					)}
				</Tooltip.Content>
			</Tooltip.Portal>
		</Tooltip.Root>
	);
}

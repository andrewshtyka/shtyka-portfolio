"use client";

// #region ============================== Imports

// animation
import { motion, AnimatePresence } from "motion/react";

// components
import ButtonIcon from "@/components/ButtonIcon/ButtonIcon";
import IconArrowLong from "@/components/Icons/IconArrowLong/IconArrowLong";

// constants
import { BUTTON_UP } from "@/constants/animation";

// hooks

// providers / context
import { ProjectInViewContext } from "@/providers/ProjectInViewProvider/ProjectInViewProvider";

// styles
import css from "./LayoutContainer.module.css";

// types
import { Props } from "./LayoutContainer.types";

// utility
import React from "react";
import { usePathname } from "next/navigation";

// #endregion ===========================

export default function LayoutContainer({ children }: Props) {
	const pathname = usePathname();
	const { isInView } = React.useContext(ProjectInViewContext);
	const isButtonVisible = pathname.includes("/projects/") && isInView;

	function scrollToTop(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		window.scrollTo({
			top: 0,
		});
	}

	return (
		<>
			{children}

			<AnimatePresence mode="wait">
				{isButtonVisible && (
					<motion.div
						className={css.container_button}
						variants={BUTTON_UP}
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						<ButtonIcon onClick={scrollToTop}>{<IconArrowLong />}</ButtonIcon>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

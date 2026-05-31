"use client";

// #region ============================== Imports

// animate
import { AnimatePresence, motion } from "motion/react";

// components
import Emblem from "../Icons/Emblem/Emblem";

// styles
import css from "./Preloader.module.css";

// utility
import { useEffect, useState } from "react";
import { PRELOADER_ANIMATION } from "@/constants/animation";

// #endregion ===========================

const MIN_TIME = 750;

export default function Preloader() {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const minDelay = new Promise((res) => setTimeout(res, MIN_TIME));

		const resourcesReady = new Promise<void>((res) => {
			if (document.readyState === "complete") {
				res();
				return;
			}
			window.addEventListener("load", () => res(), { once: true });
		});

		const fontsReady = document.fonts.ready;

		Promise.all([minDelay, resourcesReady, fontsReady]).then(() => {
			document.body.style.cursor = "default";
			window.scrollTo(0, 0);
			setVisible(false);
		});
	}, []);

	return (
		<AnimatePresence mode="wait">
			{visible && (
				<motion.div
					className={css.container}
					variants={PRELOADER_ANIMATION.bg}
					initial="initial"
					animate="animate"
					exit="exit"
				>
					<motion.div
						className={css.icon}
						variants={PRELOADER_ANIMATION.icon}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						<Emblem size={48} />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

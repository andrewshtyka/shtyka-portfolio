"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Emblem from "../Icons/Emblem/Emblem";
import css from "./Preloader.module.css";

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
			document.body.style.overflow = "visible";
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
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.25,
						},
					}}
					exit={{
						opacity: 0,
						transition: {
							duration: 0.5,
							ease: "easeOut",
						},
					}}
				>
					<motion.div
						className={css.icon}
						initial={{
							scale: 0.9,
						}}
						animate={{
							scale: 1,
							transition: {
								duration: 1,
								ease: "easeOut",
							},
						}}
					>
						<Emblem size={48} />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

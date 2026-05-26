import React from "react";

export function useBlur() {
	React.useEffect(() => {
		function handleEscape(e: KeyboardEvent) {
			if (e.code === "Escape") {
				if (!document.activeElement) return;

				(document.activeElement as HTMLElement)?.blur();
			}
		}

		document.addEventListener("keydown", handleEscape);

		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, []);
}

"use client";

import React from "react";

export const HoverLineContext = React.createContext<{
	isVisibleHover: boolean;
	setIsVisibleHover: (v: boolean) => void;
}>({
	isVisibleHover: false,
	setIsVisibleHover: () => {},
});

export function HoverLineProvider({ children }: { children: React.ReactNode }) {
	const [isVisibleHover, setIsVisibleHover] = React.useState<boolean>(false);

	return (
		<HoverLineContext.Provider value={{ isVisibleHover, setIsVisibleHover }}>
			{children}
		</HoverLineContext.Provider>
	);
}

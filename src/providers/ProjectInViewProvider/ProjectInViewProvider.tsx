"use client";

import React from "react";

export const ProjectInViewContext = React.createContext<{
	isInView: boolean | null;
	setIsInView: (v: boolean) => void;
}>({
	isInView: null,
	setIsInView: () => {},
});

export function ProjectInViewProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isInView, setIsInView] = React.useState<boolean | null>(null);

	return (
		<ProjectInViewContext.Provider value={{ isInView, setIsInView }}>
			{children}
		</ProjectInViewContext.Provider>
	);
}

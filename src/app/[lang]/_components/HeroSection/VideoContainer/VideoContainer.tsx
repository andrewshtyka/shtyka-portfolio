"use client";

import dynamic from "next/dynamic";
import { Props } from "../Video/Video.types";
import { RotatingLines } from "react-loader-spinner";

const Video = dynamic(() => import("../Video/Video"), {
	ssr: false,
	loading: () => (
		<RotatingLines
			visible={true}
			height="40"
			width="40"
			color="grey"
			strokeWidth="5"
			animationDuration="0.75"
			ariaLabel="rotating-lines-loading"
			wrapperStyle={{
				position: "absolute",
				top: "0",
				left: "0",
				width: "100%",
				height: "100%",
				display: "grid",
				placeContent: "center",
			}}
			wrapperClass=""
		/>
	),
});

export default function VideoContainer(props: Props) {
	return <Video {...props} />;
}

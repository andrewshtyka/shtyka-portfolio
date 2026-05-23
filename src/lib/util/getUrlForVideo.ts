// sanity
import { getFileAsset } from "@sanity/asset-utils";
import { client } from "@/sanity/lib/client";

// utils
import getUrlForImage from "@/lib/util/getUrlForImage";

const { projectId, dataset } = client.config();

type Obj = {
	[key: string]: unknown;
};

export default function getUrlForVideo(objVideo: Obj, objPoster: Obj) {
	if (!objVideo || typeof objVideo !== "object") return null;
	if (!objPoster || typeof objPoster !== "object") return null;

	const videoUrl = getFileAsset(objVideo, {
		projectId,
		dataset,
	}).url;

	const posterUrl = getUrlForImage(objPoster)?.url() ?? "";

	if (!videoUrl || typeof videoUrl !== "string") return;
	if (!posterUrl || typeof posterUrl !== "string") return;

	return {
		video: videoUrl,
		poster: posterUrl,
	};
}

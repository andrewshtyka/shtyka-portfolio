// sanity
import { getFileAsset } from "@sanity/asset-utils";
import { client } from "@/sanity/lib/client";

const { projectId, dataset } = client.config();

type Obj = {
	[key: string]: unknown;
};

export default function getUrlForFile(objFile: Obj) {
	const fileUrl = getFileAsset(objFile, {
		projectId,
		dataset,
	}).url;

	if (!fileUrl || typeof fileUrl !== "string") return;

	return fileUrl;
}

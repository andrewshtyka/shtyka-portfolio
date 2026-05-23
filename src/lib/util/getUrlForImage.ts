import {
	createImageUrlBuilder,
	type SanityImageSource,
} from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const { projectId, dataset } = client.config();

export default function getUrlForImage(source: SanityImageSource) {
	if (!source) return null;

	return projectId && dataset
		? createImageUrlBuilder({ projectId, dataset }).image(source)
		: null;
}

/**
 * Usage example
 *
 * <Image
 *      src={getUrlForImage(ui.image)?.url() ?? ""}
 *      alt=""
 *      width="960"
 *      height="500"
 * />
 */

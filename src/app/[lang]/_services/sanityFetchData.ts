// sanity
import { client } from "@/sanity/lib/client";

interface Props {
	query: string;
	params?: Record<string, unknown>;
	tags?: string[];
}

export async function sanityFetchData({
	query,
	params = {},
	tags = [],
}: Props) {
	return client.fetch(query, params, {
		next: {
			tags,
		},
	});
}

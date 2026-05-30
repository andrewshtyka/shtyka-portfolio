// components
import ErrorClient from "@/components/ErrorClient/ErrorClient";

// constants
import { SANITY_ERROR_QUERY, SANITY_ERROR_TAGS } from "@/constants/sanity";

// sanity
import { sanityFetchData } from "./_services/sanityFetchData";

// utility
import { cookies } from "next/headers";

export default async function NotFound() {
	const cookieStore = await cookies();
	const lang = cookieStore.get("NEXT_LOCALE")?.value ?? "ua";

	// fetch UI elements
	const ui = await sanityFetchData({
		query: SANITY_ERROR_QUERY,
		params: { lang },
		tags: SANITY_ERROR_TAGS,
	});
	const uiString = JSON.stringify(ui);

	return <ErrorClient uiString={uiString} lang={lang} />;
}

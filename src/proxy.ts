import { NextResponse, userAgent } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ua"];
const defaultLocale = "en";

function getLocale(request: NextRequest) {
	return request.headers.get("accept-language")?.includes("uk")
		? "ua"
		: defaultLocale;
}

// code snippet from Next.js docs
// https://nextjs.org/docs/app/guides/internationalization
export function proxy(request: NextRequest) {
	//
	// Get user browser
	const { browser } = userAgent(request);
	const browserName = browser.name ?? "N/A";

	//
	// Redirect
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	if (pathnameHasLocale) {
		const response = NextResponse.next();
		response.headers.set("x-browser-name", browserName);

		return response;
	}

	// Redirect if there is no locale
	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
	const response = NextResponse.redirect(request.nextUrl);

	response.headers.set("x-browser-name", browserName);
	// e.g. incoming request is /products
	// The new URL is now /en-US/products
	return response;
	// #endregion ===========================
}

export const config = {
	matcher: [
		"/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|.*\\..*).*)",
	],
};

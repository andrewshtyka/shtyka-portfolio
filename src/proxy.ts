import { NextResponse } from "next/server";
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
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	if (pathnameHasLocale) return;

	// Redirect if there is no locale
	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
	// e.g. incoming request is /products
	// The new URL is now /en-US/products
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: [
		"/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|.*\\..*).*)",
	],
};

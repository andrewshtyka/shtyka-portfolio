import { NextResponse, userAgent } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ua"];
const defaultLocale = "en";

function getLocale(request: NextRequest) {
	return request.headers.get("accept-language")?.includes("uk")
		? "ua"
		: defaultLocale;
}

function getBrowserName(request: NextRequest) {
	const { browser } = userAgent(request);
	return browser.name ?? "N/A";
}

function redirectFromProjects(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const isProjectsRoot = locales.some(
		(locale) => pathname === `/${locale}/projects`
	);
	if (!isProjectsRoot) return null;

	const matchedLocale = locales.find((locale) =>
		pathname.startsWith(`/${locale}`)
	);
	request.nextUrl.pathname = `/${matchedLocale}`;
	return NextResponse.redirect(request.nextUrl);
}

function redirectToLocale(request: NextRequest) {
	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${request.nextUrl.pathname}`;
	return NextResponse.redirect(request.nextUrl);
}

export function proxy(request: NextRequest) {
	//
	// Get user browser
	const browserName = getBrowserName(request);

	//
	// Redirect from "/projects"
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	if (pathnameHasLocale) {
		const projectsRedirect = redirectFromProjects(request);

		if (projectsRedirect) return projectsRedirect;

		const response = NextResponse.next();
		response.headers.set("x-browser-name", browserName);

		return response;
	}

	// Redirect if there is no locale
	const response = redirectToLocale(request);

	// Add browser name to response
	response.headers.set("x-browser-name", browserName);

	return response;
}

export const config = {
	matcher: [
		"/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|.*\\..*).*)",
	],
};

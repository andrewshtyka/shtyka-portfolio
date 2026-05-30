// constants
import { DEFAULT_LOCALE, VALID_LOCALES } from "./constants/routing";

// types
import type { NextRequest } from "next/server";

// utility
import { NextResponse, userAgent } from "next/server";

function getLocale(request: NextRequest) {
	// 1. cookies = true? use lang from it
	const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
	if (cookieLocale && VALID_LOCALES.includes(cookieLocale)) {
		return cookieLocale;
	}

	// 2. cookies = false? use lang from browser default settings
	const acceptLanguage = request.headers.get("accept-language") ?? "";
	const hasUkrainian = acceptLanguage
		.split(",")
		.some((lang) => lang.trim().toLowerCase().startsWith("uk"));

	return hasUkrainian ? "ua" : DEFAULT_LOCALE;
}

function getBrowserName(request: NextRequest) {
	const { browser } = userAgent(request);
	return browser.name ?? "N/A";
}

function redirectFromProjects(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const isProjectsRoot = VALID_LOCALES.some(
		(locale) => pathname === `/${locale}/projects`
	);
	if (!isProjectsRoot) return null;

	const matchedLocale = VALID_LOCALES.find((locale) =>
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

function setLocaleCookie(response: NextResponse, locale: string) {
	response.cookies.set("NEXT_LOCALE", locale, {
		path: "/",
		maxAge: 60 * 60 * 24 * 365,
	});
}

export function proxy(request: NextRequest) {
	//
	// Get user browser
	const browserName = getBrowserName(request);

	//
	// Redirect from "/projects"
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = VALID_LOCALES.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	if (pathnameHasLocale) {
		const projectsRedirect = redirectFromProjects(request);

		if (projectsRedirect) return projectsRedirect;

		const response = NextResponse.next();
		response.headers.set("x-browser-name", browserName);

		// write language to cookies
		const currentLocale = VALID_LOCALES.find((locale) =>
			pathname.startsWith(`/${locale}`)
		);
		if (currentLocale) setLocaleCookie(response, currentLocale);

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

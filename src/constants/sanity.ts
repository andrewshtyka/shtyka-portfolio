/**
 * Types of documents in Sanity CMS
 * Taken from sanity project, see file 'schemaTypes.ts'
 */
export const sanityPageTypes = {
	ui: "globalUi",
	home: "home",
	project: "project",
	error: "error",
	experiment: "experiment",
};

/**
 * Fetch global UI elements
 */
export const SANITY_UI_QUERY = `*[_type == "${sanityPageTypes.ui}" && language == $lang][0]`;
export const SANITY_UI_TAGS = [sanityPageTypes.ui];

/**
 * Fetch home page elements
 */
export const SANITY_HOME_QUERY = `*[_type == "${sanityPageTypes.home}" && language == $lang][0]`;
export const SANITY_HOME_TAGS = [sanityPageTypes.home];

/**
 * Fetch projects (on home page)
 */
export const SANITY_HOME_PROJECTS_QUERY = `
*[_type == "${sanityPageTypes.project}" && language == $lang]{
	"about": about,
	"details": details,
	"heroVideo": heroVideo,
	"_id": _id,
	"slug": slug
	}
`;
export const SANITY_HOME_PROJECTS_TAGS = [sanityPageTypes.project];

/**
 * Fetch experiments (on home page)
 */
export const SANITY_HOME_EXPERIMENTS_QUERY = `*[_type == "${sanityPageTypes.experiment}" && language == $lang][0]{"data": experiments}`;
export const SANITY_HOME_EXPERIMENTS_TAGS = [sanityPageTypes.experiment];

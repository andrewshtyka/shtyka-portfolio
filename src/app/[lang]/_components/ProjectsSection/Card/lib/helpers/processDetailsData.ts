/**
 * TODO
 * Fix red issues, types
 */

export default function processDetailsData(arr: any) {
	if (!Array.isArray(arr)) return;

	const nextArr = [...arr];

	const masterObj = {
		title: "",
		items: [],
	};

	nextArr.forEach((obj) => {
		if (obj.listItem === "bullet") {
			masterObj.items.push({
				item: obj.children[0].text,
				key: crypto.randomUUID(),
			});
		} else {
			masterObj.title = obj.children[0].text;
		}
	});

	return masterObj;
}

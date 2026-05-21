interface DetailInputItem {
	listItem?: "bullet";
	children: { text: string }[];
}

interface MasterObject {
	title: string;
	items: {
		item: string;
		key: string;
	}[];
}

export default function processDetailsData(arr: DetailInputItem[]) {
	if (!Array.isArray(arr)) return;

	const nextArr = [...arr];

	const masterObj: MasterObject = {
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

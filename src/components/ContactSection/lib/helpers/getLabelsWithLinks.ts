// utils
import getUrlForFile from "@/lib/util/getUrlForFile";

export default function getLabelsWithLinks(obj: any, fileName: string) {
	if (!obj || typeof obj !== "object") return null;

	const textsArr = obj.children.map((item: any) => {
		if (item.marks.length > 0) {
			return {
				isLink: true,
				text: item.text,
			};
		} else {
			return {
				isLink: false,
				text: item.text,
			};
		}
	});

	const assetsArr = obj.markDefs.map((item: any, i: number) => {
		if (item._type === "link") {
			return {
				text: "",
				href: item.href,
			};
		} else if (item._type === "fileDownload") {
			return {
				text: "",
				href: getUrlForFile(item.file),
				fileName: fileName,
			};
		}
	});

	const masterArr = textsArr.map((item: any, i: number) => {
		if (!item.isLink) {
			return {
				...item,
			};
		}

		if (item.isLink) {
			const nextObj = {
				...item,
				href: assetsArr[0].href,
				fileName: assetsArr[0].fileName ?? "",
			};

			assetsArr.shift();
			return nextObj;
		}
	});

	return masterArr;
}

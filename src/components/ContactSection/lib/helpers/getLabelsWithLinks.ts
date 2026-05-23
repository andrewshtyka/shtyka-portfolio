// types
import { ItemMaster } from "../../Message/Message.types";

// utils
import getUrlForFile from "@/lib/util/getUrlForFile";

interface Obj {
	style: string;
	_key: string;
	_type: string;
	children: Child[];
	markDefs: {
		_key: string;
		_type: string;
		href: string;
	}[];
}

type Child = {
	_key: string;
	_type: string;
	marks: string[];
	text: string;
};

type MarkDef = {
	_key: string;
	_type: string;
	href: string;
	file?: {
		_type: string;
		asset: {
			_ref: string;
			_type: string;
		};
	};
};

export default function getLabelsWithLinks(obj: Obj, fileName: string) {
	if (!obj || typeof obj !== "object") return null;

	const textsArr = obj.children.map((item: Child) => {
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

	const assetsArr = obj.markDefs.map((item: MarkDef) => {
		if (item._type === "link") {
			return {
				text: "",
				href: item.href,
			};
		} else if (item._type === "fileDownload") {
			return {
				text: "",
				href: item.file ? getUrlForFile(item.file) : "",
				fileName: fileName,
			};
		}
	});

	const masterArr = textsArr.map((item: ItemMaster) => {
		if (!item.isLink) {
			return {
				...item,
			};
		}

		if (item.isLink) {
			if (!assetsArr[0]) return "";

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

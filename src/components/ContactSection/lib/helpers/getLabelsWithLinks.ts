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
	file?: FileObj;
};

type FileObj = {
	_type: string;
	asset: {
		_ref: string;
		_type: string;
	};
};

export default function getLabelsWithLinks(
	obj: Obj,
	fileName?: string,
	fileObj?: FileObj
) {
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
		return {
			text: "",
			href: item.href,
		};
	});

	const masterArr = textsArr.map((item: ItemMaster) => {
		if (!item.isLink) {
			return {
				...item,
			};
		}

		if (item.isLink) {
			// CV
			if (!assetsArr[0]) {
				return {
					...item,
					href: fileObj && getUrlForFile(fileObj),
					name: fileName && fileName,
				};
			}

			// other Links
			const nextObj = {
				...item,
				href: assetsArr[0].href,
			};

			assetsArr.shift();
			return nextObj;
		}
	});

	return masterArr;
}

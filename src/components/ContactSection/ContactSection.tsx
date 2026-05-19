// types
import { Props } from "./ContactSection.types";

export default function ContactSection({ uiString }: Props) {
	if (!uiString || typeof uiString !== "string") return;
	const ui = JSON.parse(uiString);

	return <></>;
}

// types
import { Props } from "./Mobile.types";

export default function Mobile({ children, menuMobile }: Props) {
	return (
		<div>
			<button type="button">{menuMobile}</button>
			{children}
		</div>
	);
}

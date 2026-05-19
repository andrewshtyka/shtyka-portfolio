// components
import IconAsterisk from "../Icons/IconAsterisk/IconAsterisk";

// styles
import css from "./ListItem.module.css";

// types
import { Props } from "./ListItem.types";

export default function ListItem({ children }: Props) {
	return (
		<li className={css.item}>
			<span className={css.container_icon}>
				<IconAsterisk color="gray" size={8} />
			</span>
			<span className={`f_mono`}>{children}</span>
		</li>
	);
}

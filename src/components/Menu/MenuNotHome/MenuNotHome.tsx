import Divider from "@/components/Divider/Divider";
import LogoMenu from "@/components/LogoMenu/LogoMenu";
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";
import MenuLinkPrimary from "@/components/MenuLinkPrimary/MenuLinkPrimary";

import css from "./MenuNotHome.module.css";
import { Props } from "./MenuNotHome.types";

export default function MenuNotHome({ lang, buttonHome }: Props) {
	return (
		<div className={css.header}>
			<span className={css.container_logo}>
				<LogoMenu />
			</span>

			<Divider />

			<nav className={css.nav}>
				<MenuLinkPrimary href={`/${lang}`}>
					<span className={css.icon}>
						<IconArrowCurve direction="left" />
					</span>
					{buttonHome}
				</MenuLinkPrimary>
			</nav>

			<Divider />

			<LangSwitcher currentLang={lang} />
		</div>
	);
}

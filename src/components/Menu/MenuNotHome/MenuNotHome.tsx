// #region ============================== Imports

// components
import Divider from "@/components/Divider/Divider";
import LogoMenu from "@/components/LogoMenu/LogoMenu";
import IconArrowCurve from "@/components/Icons/IconArrowCurve/IconArrowCurve";
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";
import { MenuLinkSecondary } from "@/components/MenuLink/MenuLink";

// styles
import css from "./MenuNotHome.module.css";

// types
import { Props } from "./MenuNotHome.types";

// #endregion ===========================

export default function MenuNotHome({ lang, buttonHome }: Props) {
	return (
		<div className={css.header}>
			<span className={css.container_logo}>
				<LogoMenu />
			</span>

			<Divider />

			<nav className={css.nav}>
				<MenuLinkSecondary
					href={`/${lang}`}
					icon={<IconArrowCurve direction="left" />}
				>
					{buttonHome}
				</MenuLinkSecondary>
			</nav>

			<Divider />

			<LangSwitcher currentLang={lang} />
		</div>
	);
}

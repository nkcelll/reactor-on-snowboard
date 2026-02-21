import type { FC, SVGProps } from "react";

type IconComponent = FC<SVGProps<SVGSVGElement>>;

const modules = import.meta.glob<{
  default: IconComponent;
}>("./*.tsx", { eager: true });

const icons: Record<string, IconComponent> = {};

for (const path in modules) {
  const name = path.replace(/^\.\/(.*)\.tsx$/, "$1");
  icons[name] = modules[path].default;
}

// ⚡ Named exports
export const IconBurgerMenu = icons.IconBurgerMenu;
export const IconClose = icons.IconClose;
export const IconFacebook = icons.IconFacebook;
export const IconInstagram = icons.IconInstagram;
export const IconAdd = icons.IconAdd
export const IconArrowDown = icons.IconArrowDown
export const IconCart = icons.IconCart
export const IconDarkMoon = icons.IconDarkMoon
export const IconEdit = icons.IconEdit
export const IconEmailInfo = icons.IconEmailInfo
export const IconGrid2 = icons.IconGrid2
export const IconGrid3 = icons.IconGrid3
export const IconGrid4 = icons.IconGrid4
export const IconLocation = icons.IconLocation
export const IconMinus = icons.IconMinus
export const IconPhone = icons.IconPhone
export const IconPlus = icons.IconPlus
export const IconRemoveTrash = icons.IconRemoveTrash
export const IconSearch = icons.IconSearch
export const IconSun = icons.IconSun
export const IconUser = icons.IconUser

// Optional default export
export default icons;
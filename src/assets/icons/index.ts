import { FC, SVGProps } from "react";

// Create a type for all icons
type IconComponent = FC<SVGProps<SVGSVGElement>>;

// Use Vite's import.meta.glob to automatically grab all TSX files
const modules = import.meta.glob<{
  default: IconComponent;
}>("./*.tsx", { eager: true });

const icons: Record<string, IconComponent> = {};

// Populate the icons object
for (const path in modules) {
  const name = path.replace(/^\.\/(.*)\.tsx$/, "$1"); // "IconAdd.tsx" → "IconAdd"
  icons[name] = modules[path].default;
}

export default icons;

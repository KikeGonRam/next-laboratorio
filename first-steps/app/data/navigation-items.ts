import type { NavigationItem } from "@/app/types/navigation";

export const navigationItems: NavigationItem[] = [
    { href: "/", label: "Mi carrera" },
    { href: "/about", label: "Acerca de" },
    { href: "/blog", label: "Blog" },
    {
        href: "https://nextjs.org/docs/app/getting-started/project-structure",
        label: "Next.js",
        external: true,
    },
];

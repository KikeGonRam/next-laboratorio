"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "@/app/types/navigation";

const baseClassName = `
    inline-flex
    items-center
    gap-1
    whitespace-nowrap
    rounded-full
    px-3
    py-1.5
    transition-colors
    focus-visible:outline-2
    focus-visible:outline-offset-2
    focus-visible:outline-cyan-600
`;

function NavigationLink({ href, label, external }: NavigationItem) {

    const pathname = usePathname();

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseClassName} hover:bg-zinc-100 hover:text-emerald-800`}
            >
                {label}
                <span aria-hidden="true" className="text-xs">↗</span>
                <span className="sr-only">(se abre en una pestaña nueva)</span>
            </a>
        );
    }

    const isActive =
        pathname === href ||
        (href !== "/" && pathname.startsWith(`${href}/`));

    const className = `
        ${baseClassName}
        ${isActive
            ? "bg-emerald-950 text-white"
            : "hover:bg-zinc-100 hover:text-emerald-800"
        }
    `;

    return (
        <Link href={href} className={className} aria-current={isActive ? "page" : undefined}>
            {label}
        </Link>
    );
}

export default NavigationLink;

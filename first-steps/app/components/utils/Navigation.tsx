import NavigationLink from "@/app/components/utils/NavigationLink";
import { navigationItems } from "@/app/data/navigation-items";

function Navigation() {

    return (
        <nav aria-label="Navegación principal" className="order-3 -mx-6 w-[calc(100%+3rem)] overflow-x-auto px-6 sm:order-0 sm:mx-0 sm:w-auto sm:px-0">
            <ul className="flex items-center gap-1 text-sm font-medium text-zinc-600">
                {navigationItems.map((item) => (
                    <li key={item.href}>
                        <NavigationLink {...item} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;

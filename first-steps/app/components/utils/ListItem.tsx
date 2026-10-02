import Link from "next/link";

type ListItemProps = {
    href: string;
    label: string;
    description: string;
    number: string;
};

function ListItem({ href, label, description, number }: ListItemProps) {

    return (
        <li key={href}>
            <Link
                href={href}
                className="group flex h-full min-h-56 flex-col justify-between rounded-lg border border-zinc-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-950/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"
            >
                <span className="text-sm font-bold tracking-[0.14em] text-cyan-700">{number}</span>
                <div>
                    <h3 className="mb-3 text-xl font-bold text-emerald-950 transition-colors group-hover:text-emerald-700">{label}</h3>
                    <p className="text-sm leading-6 text-zinc-600">{description}</p>
                </div>
                <span className="mt-6 text-sm font-semibold text-emerald-700">Ver publicaciones <span aria-hidden="true">&rarr;</span></span>
            </Link>
        </li>
    );
}

export default ListItem;

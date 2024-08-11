import Link from "next/link";
import { Icons } from "../ui/icon";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#",
    label: "Test 1",
  },
  {
    href: "#",
    label: "Test 2",
  },
  {
    href: "#",
    label: "Test 3",
  },
  {
    href: "#",
    label: "Test 4",
  },
];

export function Nav() {
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
        <Link className="flex items-center space-x-2" href="/">
          <Icons.logo className="fill-primary size-9" />
          <h1 className="text-xl font-bold text-primary">Pharmacie Garde</h1>
        </Link>
      </nav>
    </header>
  );
}

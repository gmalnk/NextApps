"use client";
import clsx from "clsx";
import { HomeIcon, CheckCircle2, Star, Bookmark } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in Link database.
const links = [
  {
    name: "All Tasks",
    title: "All Tasks",
    href: "/home",
    Icon: <HomeIcon className="w-5 h-5 text-green-600" />,
  },
  {
    name: "Important",
    title: "Important Tasks",
    href: "/home/important",
    Icon: <Star className="w-5 h-5 text-green-600" />,
  },
  {
    name: "Completed",
    title: "Completed Tasks",
    href: "/home/completed",
    Icon: <CheckCircle2 className="w-5 h-5 text-green-600" />,
  },
  {
    name: "Do It Now!",
    title: "Incomplete Tasks",
    href: "/home/incomplete",
    Icon: <Bookmark className="w-5 h-5 text-green-600" />,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            {link.Icon}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

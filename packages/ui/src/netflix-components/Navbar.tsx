"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNavigation from "./UserNavigation";
import clsx from "clsx";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/show" },
  { name: "Movies", href: "/home/movie" },
  { name: "Recently Added", href: "/home/recent" },
  { name: "My List", href: "/home/user/list" },
];

export default function Navbar({ session }: { session: any }) {
  const pathName = usePathname();
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-28">
          <Image src={Logo} alt="Netflix logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => (
            <div key={idx}>
              <li>
                <Link
                  className={clsx("text-sm", {
                    "text-white font-semibold underline":
                      pathName === link.href,
                    "text-gray-300 font-normal": pathName !== link.href,
                  })}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
        <UserNavigation session={session} />
      </div>
    </div>
  );
}

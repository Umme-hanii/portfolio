"use client";

import { links } from "@/lib/data";
import Link from "next/link";

const Header = () => {
  return (
    <header className="max-w-screen-md lg:rounded-full lg:mx-auto relative">
      <nav className="navbar bg-base-300 flex justify-center items-center absolute lg:top-4 lg:rounded-full">
        <ul className="flex flex-col gap-2  font-medium md:flex-row md:justify-center md:items-center md:gap-8">
          {links.map((link) => {
            return (
              <li key={link.hash} className="hover:text-neutral-200">
                <Link href={link.hash}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

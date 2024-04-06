import React from "react";
import Link from "next/link";
import "../app.css";
import { NAV_LINKS } from "../../../constants";

const NavBar: React.FC = () => {
  const isLoggedIn = true; // Replace with your authentication logic

  return (
    <nav className="flex items-center p-4 h-20 z-30">
      <Link href="/">
        <div className="flex items-center justify-center text-white">
          <img
            src="https://th.bing.com/th/id/OIP.L7AtVq1m8fCRJnytQLiHSgHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Logo"
            className="h-8 mr-2 aspect-auto"
          />
          <div>
            <span className="text-black text-xl font-bold">SALVUS</span>
          </div>
        </div>
      </Link>

      <ul className="hidden flexCenter h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className="regular-16 text-gray-50 flexCenter items-center cursor-pointer justify-center pb-1.5 transition-all hover:font-bold"
          >
            {link.key}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

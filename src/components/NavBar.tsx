import Link from "next/link";

import { NAV_ITEMS } from "../constants/navigationItems";

const NavBar = () => {
  return (
    <nav className="mx-8 h-50 md:h-20 flex items-center">
      <ul className="flex flex-col md:flex-row gap-6 justify-center">
        {NAV_ITEMS.map((navItem) => {
          return (
            <li key={navItem.href}>
              <Link 
                href={navItem.href}
                className="text-white font-semibold text-xl"
              >
                {navItem.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;

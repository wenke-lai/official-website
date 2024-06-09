import React from "react";
import { TbMenu2 } from "react-icons/tb";

import { cn } from "src/utils/styles";

type NavItem = {
  href: string;
  label: string;
};

type LayoutHeaderProps = {
  title: string;
  navItems: NavItem[];
};

const LayoutHeader: React.FC<LayoutHeaderProps> = ({ title, navItems }) => {
  return (
    <header
      className={cn(
        // Size
        "min-h-16 max-h-fit container",
        // Layout
        "row middle between md:around gap-4"
      )}
    >
      {/* Logo or Title */}
      <hgroup>
        <h1>{title}</h1>
      </hgroup>

      {/* NavBar */}
      <nav className="hidden md:block">
        <ul className="row gap-2 xl:gap-4">
          {navItems.map((item) => (
            <React.Fragment key={item.label}>
              <li>
                <a href={item.href}>{item.label}</a>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>

      {/* NavBar for mobile */}
      <nav className="block md:hidden">
        <TbMenu2 />
      </nav>
    </header>
  );
};

export default LayoutHeader;

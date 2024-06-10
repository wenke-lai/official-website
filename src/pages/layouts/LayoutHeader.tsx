import React from "react";
import { TbMenu2 } from "react-icons/tb";

import { cn } from "src/utils/styles";

type NavItem = {
  href: string;
  label: string;
};

type LayoutHeaderProps = {
  className?: string;
  title: string;
  navItems: NavItem[];
};

const LayoutHeader: React.FC<LayoutHeaderProps> = ({
  className,
  title,
  navItems,
}) => {
  return (
    <header
      className={cn(
        // Size
        "min-h-16 max-h-fit",
        // Layout
        "row middle between gap-4",
        className
      )}
    >
      {/* Logo or Title */}
      <hgroup>
        <h1>{title}</h1>
      </hgroup>

      {/* NavBar */}
      <nav className="hidden md:block">
        <ul className="gap-2 row xl:gap-4">
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

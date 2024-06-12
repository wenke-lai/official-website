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
        <h1 className="text-transparent bg-gradient-to-br from-blue-500 to-green-500 bg-clip-text">
          {title}
        </h1>
      </hgroup>

      {/* NavBar */}
      <nav className="hidden md:block">
        <ul className="gap-2 capitalize row xl:gap-4">
          {navItems.map((item) => (
            <React.Fragment key={item.label}>
              <li className="hover:underline">
                <a href={item.href}>
                  <h3>{item.label}</h3>
                </a>
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

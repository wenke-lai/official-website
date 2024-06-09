import React from "react";
import { TbMenu2, TbMoon, TbSun } from "react-icons/tb";
import { useTheme } from "src/hooks/theme-hook";

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
  const { theme, setTheme } = useTheme();

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

      <button
        type="button"
        onClick={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
      >
        {theme === "dark" ? <TbSun /> : <TbMoon />}
      </button>
    </header>
  );
};

export default LayoutHeader;

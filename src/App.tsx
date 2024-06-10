import { TbMoon, TbSun } from "react-icons/tb";
import { useTheme } from "./hooks/theme-hook";
import Contact from "./pages/contact";
import Hero from "./pages/hero";
import { Layouts } from "./pages/layouts";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import Services from "./pages/services";

const navItems = [
  { label: "services", href: "#services" },
  { label: "resume", href: "#resume" },
  { label: "portfolio", href: "#portfolio" },
  { label: "contact", href: "#contact" },
];

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <Layouts.Layout className="relative px-4">
      <Layouts.Header
        className="absolute inset-x-0 top-0 px-4"
        title="Wenke Studio"
        navItems={navItems}
      />

      <Layouts.Content>
        <Layouts.ContentSection id="hero" className="grid py-16 min-h-dvh">
          <Hero />
        </Layouts.ContentSection>

        <Layouts.ContentSection id="services" className="grid py-8">
          <Services />
        </Layouts.ContentSection>

        <Layouts.ContentSection id="resume" className="grid py-8">
          <Resume />
        </Layouts.ContentSection>

        <Layouts.ContentSection id="portfolio" className="grid py-8">
          <Portfolio />
        </Layouts.ContentSection>

        <Layouts.ContentSection id="contact">
          <Contact />
        </Layouts.ContentSection>

        {/* PoC for demo */}
        <button
          className="fixed w-8 h-8 border rounded-md right-8 bottom-8 row middle center border-foreground"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          <p>up</p>
        </button>

        <button
          className="fixed w-8 h-8 border rounded-full right-8 bottom-24 row middle center border-foreground"
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {theme === "dark" ? <TbSun /> : <TbMoon />}
        </button>
      </Layouts.Content>

      <Layouts.Footer copyright="Copyright © 2024 Wenke Studio. All rights reserved." />
    </Layouts.Layout>
  );
}

export default App;

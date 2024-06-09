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
  return (
    <Layouts.Layout>
      <Layouts.Header title="Wenke Studio" navItems={navItems} />
      <Layouts.Content>
        <Layouts.ContentSection id="hero" className="min-h-dvh">
          <Hero />
        </Layouts.ContentSection>

        <Layouts.ContentSection id="services">
          <Services />
        </Layouts.ContentSection>

        <Layouts.ContentSection id="resume">
          <Resume />
        </Layouts.ContentSection>

        <Layouts.ContentSection id="portfolio">
          <Portfolio />
        </Layouts.ContentSection>

        <Layouts.ContentSection id="contact">
          <Contact />
        </Layouts.ContentSection>

        {/* PoC for demo */}
        <button
          className="fixed right-8 bottom-8 rounded-full w-8 h-8 bg-sky-400 row middle center"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          <p>up</p>
        </button>
      </Layouts.Content>
      <Layouts.Footer copyright="Copyright © 2024 Wenke Studio. All rights reserved." />
    </Layouts.Layout>
  );
}

export default App;

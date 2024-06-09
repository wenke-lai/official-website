import Hero from "src/pages/hero";
import { Layouts } from "src/pages/layouts";

const navItems = [
  { label: "about", href: "#about" },
  { label: "education", href: "#education" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
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

        {/* PoC for demo */}
        {navItems.map((item) => (
          <div className="h-96 debug" id={item.label}>
            {item.label}
          </div>
        ))}

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

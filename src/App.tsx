import { Layouts } from "src/pages/layouts";

const navItems = [
  { label: "home", href: "/" },
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
        {/* PoC for demo */}
        {navItems.map((item) => (
          <div className="h-96 debug" id={item.label}>
            {item.label}
          </div>
        ))}
      </Layouts.Content>
      <Layouts.Footer copyright="Copyright © 2024 Wenke Studio. All rights reserved." />
    </Layouts.Layout>
  );
}

export default App;

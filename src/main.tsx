import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App.tsx";
import ThemeProvider from "src/contexts/theme-provider";

// Supports weights 200-900
import "@fontsource-variable/nunito";
import "src/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

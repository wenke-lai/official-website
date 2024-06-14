import React from "react";
import ReactDOM from "react-dom/client";
import { IconContext } from "react-icons";
import App from "src/App.tsx";
import ThemeProvider from "src/contexts/theme-provider";

// Supports weights 200-900
import "@fontsource-variable/nunito";
import "src/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <IconContext.Provider
        value={{
          className: "text-foreground text-2xl rounded-full",
        }}
      >
        <App />
      </IconContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);

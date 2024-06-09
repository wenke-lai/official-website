import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App.tsx";
import ThemeProvider from "src/contexts/theme-provider";

import "src/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

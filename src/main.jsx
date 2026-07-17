import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "src/index.css";
import {ThemeProvider} from "./contexts/ThemeContextProvider";
import {
  ActiveIndexContext,
  ActiveIndexContextProvider,
} from "src/contexts/ActiveIndexContextProvider";
import { HashRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <ActiveIndexContextProvider>
      <ThemeProvider>
        <Analytics />
        <App />
      </ThemeProvider>
    </ActiveIndexContextProvider>
  </HashRouter>
);

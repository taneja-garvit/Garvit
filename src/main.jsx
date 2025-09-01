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

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <ActiveIndexContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ActiveIndexContextProvider>
  </HashRouter>
);

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { ColorsProvider } from "./context/ColorsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <ColorsProvider>
      <App />
    </ColorsProvider>
  </ThemeProvider>
);

import {
  ThemeContext
} from "./chunk-Q5X2UUF3.mjs";

// src/testButton.tsx
import { useContext } from "react";
import { jsxs } from "react/jsx-runtime";
function Button({ children }) {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("Button must be used within a ThemeProvider");
  }
  return /* @__PURE__ */ jsxs("button", { className: "button", onClick: themeContext.toggleTheme, children: [
    children,
    " (Current theme: ",
    themeContext.theme,
    ")"
  ] });
}

export {
  Button
};

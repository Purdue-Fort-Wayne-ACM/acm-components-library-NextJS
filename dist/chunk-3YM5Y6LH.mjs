// src/ThemeProvider.tsx
import { useEffect, useState, React } from "react";
import { jsx } from "react/jsx-runtime";
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
    document.documentElement.setAttribute("data-theme", storedTheme || "light");
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children });
}
var ThemeContext = React.createContext(null);

export {
  ThemeProvider,
  ThemeContext
};

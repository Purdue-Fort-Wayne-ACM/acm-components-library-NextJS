"use client";

import React, { useEffect, useState } from "react"; 

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
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

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const ThemeContext = React.createContext<{ theme: string; toggleTheme: () => void } | null>(null);

export default ThemeProvider;


/* Example Use

"use client"; // src/testButton.tsx

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import "../styles.css"; // Ensure the styles are included

export default function Button({ children }: { children: React.ReactNode }) {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Button must be used within a ThemeProvider");
  }

  return (
    <button  className="button" onClick={themeContext.toggleTheme}>
      {children} (Current theme: {themeContext.theme})
    </button>
  );
}

*/
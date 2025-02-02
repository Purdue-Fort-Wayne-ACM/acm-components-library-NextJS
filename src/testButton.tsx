"use client"; // src/testButton.tsx

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import "../themes.css"; // Ensure the styles are included

export default function Button({ children }: { children: React.ReactNode }) {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Button must be used within a ThemeProvider");
  }

  return (
    <button className="button" onClick={themeContext.toggleTheme}>
      {children} (Current theme: {themeContext.theme})
    </button>
  );
}

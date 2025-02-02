export function switchTheme(theme: "light" | "dark" | "solarized") {
    document.documentElement.setAttribute("data-theme", theme);
  }
  
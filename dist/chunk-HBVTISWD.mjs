// src/switchTheme.tsx
function switchTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export {
  switchTheme
};

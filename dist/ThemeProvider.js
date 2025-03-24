"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ThemeProvider.tsx
var ThemeProvider_exports = {};
__export(ThemeProvider_exports, {
  ThemeContext: () => ThemeContext,
  ThemeProvider: () => ThemeProvider,
  default: () => ThemeProvider_default
});
module.exports = __toCommonJS(ThemeProvider_exports);
var import_react = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
function ThemeProvider({ children }) {
  const [theme, setTheme] = (0, import_react.useState)("light");
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, { value: { theme, toggleTheme }, children });
}
var ThemeContext = import_react.default.createContext(null);
var ThemeProvider_default = ThemeProvider;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ThemeContext,
  ThemeProvider
});

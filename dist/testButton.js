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

// src/testButton.tsx
var testButton_exports = {};
__export(testButton_exports, {
  default: () => Button
});
module.exports = __toCommonJS(testButton_exports);
var import_react2 = require("react");

// src/ThemeProvider.tsx
var import_react = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var ThemeContext = import_react.default.createContext(null);

// src/testButton.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Button({ children }) {
  const themeContext = (0, import_react2.useContext)(ThemeContext);
  if (!themeContext) {
    throw new Error("Button must be used within a ThemeProvider");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { className: "button", onClick: themeContext.toggleTheme, children: [
    children,
    " (Current theme: ",
    themeContext.theme,
    ")"
  ] });
}

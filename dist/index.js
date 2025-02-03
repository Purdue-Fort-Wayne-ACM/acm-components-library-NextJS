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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ACMFooter: () => ACMFooter,
  AccessibilityWidget: () => AccessibilityWidget_default,
  Logo: () => Logo,
  ThemeProvider: () => ThemeProvider
});
module.exports = __toCommonJS(index_exports);

// src/ThemeProvider.tsx
var import_react = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react.default.createElement(ThemeContext.Provider, { value: { theme, toggleTheme } }, children);
}
var ThemeContext = import_react.default.createContext(null);

// src/Logo.tsx
var import_image = __toESM(require("next/image"));

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/Logo.tsx
function Logo({ width = 50, height = 50, className }) {
  return /* @__PURE__ */ React.createElement(
    import_image.default,
    {
      src: "/acmlogo_white.svg",
      width,
      height,
      alt: "Custom Icon",
      className: cn("inline-block", className)
    }
  );
}

// src/Footer.tsx
function ACMFooter() {
  return /* @__PURE__ */ React.createElement("div", { className: "internal-footerWrapper" }, /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("div", { className: "internal-footer" }, /* @__PURE__ */ React.createElement("div", { className: "internal-footerFlexItem" }, /* @__PURE__ */ React.createElement("h4", null, " "), /* @__PURE__ */ React.createElement(Logo, { height: 50 })), /* @__PURE__ */ React.createElement("div", { className: "internal-footerFlexItem" }, /* @__PURE__ */ React.createElement("h4", null, "Resources"), /* @__PURE__ */ React.createElement("a", null, "About Us"), /* @__PURE__ */ React.createElement("a", null, "Officers"), /* @__PURE__ */ React.createElement("a", null, "Github & Contribution")), /* @__PURE__ */ React.createElement("div", { className: "internal-footerFlexItem" }, /* @__PURE__ */ React.createElement("h4", null, "Partners"), /* @__PURE__ */ React.createElement("a", null, "OUTspoken"), /* @__PURE__ */ React.createElement("a", null, "Generation Action")), /* @__PURE__ */ React.createElement("div", { className: "internal-footerFlexItem" }, /* @__PURE__ */ React.createElement("h4", null, "Policies"), /* @__PURE__ */ React.createElement("a", null, "Test Links")), /* @__PURE__ */ React.createElement("div", { className: "internal-footerFlexItem" }, /* @__PURE__ */ React.createElement("h4", null, "PFW Websites"), /* @__PURE__ */ React.createElement("a", null, "Department of Comp. Sci"))), /* @__PURE__ */ React.createElement("div", { className: "internal-disclaimer" }, "This is a PFW-ACM site. The views on this page do not represent the views of Purdue Fort Wayne. ")));
}

// src/AccessibilityWidget.tsx
var import_react2 = __toESM(require("react"));
var import_lucide_react = require("lucide-react");

// src/AccessibilityPane.tsx
function AccessibilityPane({
  children
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "accessibilityPanel" }, children));
}

// src/AccessibilityButton.tsx
function AccessibilityButton(props) {
  return /* @__PURE__ */ React.createElement("div", { className: "A-ButtonContainer" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "A-Button",
      onClick: props.onClick
    },
    /* @__PURE__ */ React.createElement("span", { className: "A-icon-span" }, props.icon),
    props.buttonText
  ));
}

// src/AccessibilityWidget.tsx
var AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = (0, import_react2.useState)(false);
  const [fontSize, setFontSize] = (0, import_react2.useState)(16);
  const [contrast, setContrast] = (0, import_react2.useState)("contrast(100%)");
  const [filter, setFilter] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    document.body.style.fontSize = `${fontSize}px`;
    document.body.childNodes.forEach((e) => {
      e.style.filter = `${contrast} ${filter}`;
    });
  }, [fontSize, contrast, filter]);
  const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 2, 12));
  const toggleContrast = () => {
    setContrast((prev) => prev === "contrast(100%)" ? "contrast(250%)" : "contrast(100%)");
  };
  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(
    "button",
    {
      onClick: () => setIsOpen(true),
      className: "m-4 accessibilityButton",
      "aria-label": "Open Accessibility Menu"
    },
    /* @__PURE__ */ import_react2.default.createElement(import_lucide_react.Accessibility, { strokeWidth: 2.5, className: "half-ratio-icon", size: 24, "aria-hidden": "true" })
  ), isOpen && // Content for the menu
  /* @__PURE__ */ import_react2.default.createElement(AccessibilityPane, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "A-ButtonGrid" }, /* @__PURE__ */ import_react2.default.createElement(AccessibilityButton, { onClick: increaseFontSize, icon: /* @__PURE__ */ import_react2.default.createElement(import_lucide_react.AArrowUp, { className: "half-ratio-icon" }), buttonText: "Increase Font Size" }), /* @__PURE__ */ import_react2.default.createElement(AccessibilityButton, { onClick: decreaseFontSize, icon: /* @__PURE__ */ import_react2.default.createElement(import_lucide_react.AArrowDown, { className: "half-ratio-icon" }), buttonText: "Decrease Font Size" }), /* @__PURE__ */ import_react2.default.createElement(AccessibilityButton, { onClick: toggleContrast, icon: /* @__PURE__ */ import_react2.default.createElement(import_lucide_react.Contrast, { className: "half-ratio-icon" }), buttonText: "Toggle High Contrast" })), /* @__PURE__ */ import_react2.default.createElement("div", { className: "A-Pane-CloseButton-Container" }, /* @__PURE__ */ import_react2.default.createElement("button", { className: "A-Pane-CloseButton", onClick: () => setIsOpen(false) }, "Close Pane"))));
};
var AccessibilityWidget_default = AccessibilityWidget;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ACMFooter,
  AccessibilityWidget,
  Logo,
  ThemeProvider
});

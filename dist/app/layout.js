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

// src/app/layout.tsx
var layout_exports = {};
__export(layout_exports, {
  default: () => RootLayout,
  metadata: () => metadata
});
module.exports = __toCommonJS(layout_exports);
var import_google = require("next/font/google");

// src/ThemeProvider.tsx
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

// src/Logo.tsx
var import_image = __toESM(require("next/image"));

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/Logo.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Logo({ width = 50, height = 50, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_jsx_runtime3 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "internal-footerWrapper", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("footer", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "internal-footer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "internal-footerFlexItem", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: " " }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Logo, { height: 50 })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "internal-footerFlexItem", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "Resources" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { children: "About Us" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { children: "Officers" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { children: "Github & Contribution" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "internal-footerFlexItem", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "Partners" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { children: "OUTspoken" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { children: "Generation Action" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "internal-footerFlexItem", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "Policies" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { children: "Test Links" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "internal-footerFlexItem", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "PFW Websites" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { children: "Department of Comp. Sci" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "internal-disclaimer", children: "This is a PFW-ACM site. The views on this page do not represent the views of Purdue Fort Wayne, but are sanctioned by a student organization within it. If there are concerns please contact acm@pfw.edu. " })
  ] }) });
}

// src/AccessibilityWidget.tsx
var import_react2 = require("react");
var import_lucide_react = require("lucide-react");

// src/AccessibilityPane.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function AccessibilityPane({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "accessibilityPanel", children }) });
}

// src/AccessibilityButton.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function AccessibilityButton(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "A-ButtonContainer", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "button",
    {
      className: "A-Button",
      onClick: props.onClick,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "A-icon-span", children: props.icon }),
        props.buttonText
      ]
    }
  ) });
}

// src/AccessibilityWidget.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "button",
      {
        onClick: () => setIsOpen(true),
        className: "m-4 accessibilityButton",
        "aria-label": "Open Accessibility Menu",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react.Accessibility, { strokeWidth: 2.5, className: "half-ratio-icon", size: 24, "aria-hidden": "true" })
      }
    ),
    isOpen && // Content for the menu
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(AccessibilityPane, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "A-ButtonGrid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AccessibilityButton, { onClick: increaseFontSize, icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react.AArrowUp, { className: "half-ratio-icon" }), buttonText: "Increase Font Size" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AccessibilityButton, { onClick: decreaseFontSize, icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react.AArrowDown, { className: "half-ratio-icon" }), buttonText: "Decrease Font Size" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AccessibilityButton, { onClick: toggleContrast, icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react.Contrast, { className: "half-ratio-icon" }), buttonText: "Toggle High Contrast" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "A-Pane-CloseButton-Container", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { className: "A-Pane-CloseButton", onClick: () => setIsOpen(false), children: "Close Pane" }) })
    ] })
  ] });
};
var AccessibilityWidget_default = AccessibilityWidget;

// src/app/layout.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var geistSans = (0, import_google.Geist)({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});
var geistMono = (0, import_google.Geist_Mono)({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});
var metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};
function RootLayout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("html", { lang: "en", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(ThemeProvider, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("head", {}),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(AccessibilityWidget_default, {}),
      children,
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Footer, {})
    ] })
  ] }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  metadata
});

"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/AccessibilityWidget.tsx
var AccessibilityWidget_exports = {};
__export(AccessibilityWidget_exports, {
  default: () => AccessibilityWidget_default
});
module.exports = __toCommonJS(AccessibilityWidget_exports);
var import_react = require("react");
var import_lucide_react = require("lucide-react");

// src/AccessibilityPane.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function AccessibilityPane({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "accessibilityPanel", children }) });
}

// src/AccessibilityButton.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function AccessibilityButton(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "A-ButtonContainer", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "button",
    {
      className: "A-Button",
      onClick: props.onClick,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "A-icon-span", children: props.icon }),
        props.buttonText
      ]
    }
  ) });
}

// src/AccessibilityWidget.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = (0, import_react.useState)(false);
  const [fontSize, setFontSize] = (0, import_react.useState)(16);
  const [contrast, setContrast] = (0, import_react.useState)("contrast(100%)");
  const [filter, setFilter] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "button",
      {
        onClick: () => setIsOpen(true),
        className: "m-4 accessibilityButton",
        "aria-label": "Open Accessibility Menu",
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.Accessibility, { strokeWidth: 2.5, className: "half-ratio-icon", size: 24, "aria-hidden": "true" })
      }
    ),
    isOpen && // Content for the menu
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(AccessibilityPane, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "A-ButtonGrid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(AccessibilityButton, { onClick: increaseFontSize, icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.AArrowUp, { className: "half-ratio-icon" }), buttonText: "Increase Font Size" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(AccessibilityButton, { onClick: decreaseFontSize, icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.AArrowDown, { className: "half-ratio-icon" }), buttonText: "Decrease Font Size" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(AccessibilityButton, { onClick: toggleContrast, icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.Contrast, { className: "half-ratio-icon" }), buttonText: "Toggle High Contrast" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "A-Pane-CloseButton-Container", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { className: "A-Pane-CloseButton", onClick: () => setIsOpen(false), children: "Close Pane" }) })
    ] })
  ] });
};
var AccessibilityWidget_default = AccessibilityWidget;

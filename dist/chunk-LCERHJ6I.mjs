import {
  AccessibilityButton
} from "./chunk-EOH2OEJX.mjs";
import {
  AccessibilityPane
} from "./chunk-6XN6LGVP.mjs";

// src/AccessibilityWidget.tsx
import { useState, useEffect } from "react";
import { Accessibility, AArrowUp, AArrowDown, Contrast } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState("contrast(100%)");
  const [filter, setFilter] = useState("");
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsOpen(true),
        className: "m-4 accessibilityButton",
        "aria-label": "Open Accessibility Menu",
        children: /* @__PURE__ */ jsx(Accessibility, { strokeWidth: 2.5, className: "half-ratio-icon", size: 24, "aria-hidden": "true" })
      }
    ),
    isOpen && // Content for the menu
    /* @__PURE__ */ jsxs(AccessibilityPane, { children: [
      /* @__PURE__ */ jsxs("div", { className: "A-ButtonGrid", children: [
        /* @__PURE__ */ jsx(AccessibilityButton, { onClick: increaseFontSize, icon: /* @__PURE__ */ jsx(AArrowUp, { className: "half-ratio-icon" }), buttonText: "Increase Font Size" }),
        /* @__PURE__ */ jsx(AccessibilityButton, { onClick: decreaseFontSize, icon: /* @__PURE__ */ jsx(AArrowDown, { className: "half-ratio-icon" }), buttonText: "Decrease Font Size" }),
        /* @__PURE__ */ jsx(AccessibilityButton, { onClick: toggleContrast, icon: /* @__PURE__ */ jsx(Contrast, { className: "half-ratio-icon" }), buttonText: "Toggle High Contrast" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "A-Pane-CloseButton-Container", children: /* @__PURE__ */ jsx("button", { className: "A-Pane-CloseButton", onClick: () => setIsOpen(false), children: "Close Pane" }) })
    ] })
  ] });
};
var AccessibilityWidget_default = AccessibilityWidget;

export {
  AccessibilityWidget_default
};

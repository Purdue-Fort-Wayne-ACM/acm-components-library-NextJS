import {
  AccessibilityButton
} from "./chunk-GXKFMWMO.mjs";
import {
  AccessibilityPane
} from "./chunk-MP7VPWM6.mjs";

// src/AccessibilityWidget.tsx
import React, { useState, useEffect } from "react";
import { Accessibility, AArrowUp, AArrowDown, Contrast } from "lucide-react";
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setIsOpen(true),
      className: "m-4 accessibilityButton",
      "aria-label": "Open Accessibility Menu"
    },
    /* @__PURE__ */ React.createElement(Accessibility, { strokeWidth: 2.5, className: "half-ratio-icon", size: 24, "aria-hidden": "true" })
  ), isOpen && // Content for the menu
  /* @__PURE__ */ React.createElement(AccessibilityPane, null, /* @__PURE__ */ React.createElement("div", { className: "A-ButtonGrid" }, /* @__PURE__ */ React.createElement(AccessibilityButton, { onClick: increaseFontSize, icon: /* @__PURE__ */ React.createElement(AArrowUp, { className: "half-ratio-icon" }), buttonText: "Increase Font Size" }), /* @__PURE__ */ React.createElement(AccessibilityButton, { onClick: decreaseFontSize, icon: /* @__PURE__ */ React.createElement(AArrowDown, { className: "half-ratio-icon" }), buttonText: "Decrease Font Size" }), /* @__PURE__ */ React.createElement(AccessibilityButton, { onClick: toggleContrast, icon: /* @__PURE__ */ React.createElement(Contrast, { className: "half-ratio-icon" }), buttonText: "Toggle High Contrast" })), /* @__PURE__ */ React.createElement("div", { className: "A-Pane-CloseButton-Container" }, /* @__PURE__ */ React.createElement("button", { className: "A-Pane-CloseButton", onClick: () => setIsOpen(false) }, "Close Pane"))));
};
var AccessibilityWidget_default = AccessibilityWidget;

export {
  AccessibilityWidget_default
};

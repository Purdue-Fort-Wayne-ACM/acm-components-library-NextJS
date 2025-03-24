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

// src/AccessibilityButton.tsx
var AccessibilityButton_exports = {};
__export(AccessibilityButton_exports, {
  default: () => AccessibilityButton
});
module.exports = __toCommonJS(AccessibilityButton_exports);
var import_jsx_runtime = require("react/jsx-runtime");
function AccessibilityButton(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "A-ButtonContainer", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    {
      className: "A-Button",
      onClick: props.onClick,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "A-icon-span", children: props.icon }),
        props.buttonText
      ]
    }
  ) });
}

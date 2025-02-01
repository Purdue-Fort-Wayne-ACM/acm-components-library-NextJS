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

// src/testButton.tsx
var testButton_exports = {};
__export(testButton_exports, {
  default: () => testButton_default
});
module.exports = __toCommonJS(testButton_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var testButton = ({ children, onClick }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "px-4 py-2 bg-blue-500 text-white rounded", onClick, children });
};
var testButton_default = testButton;

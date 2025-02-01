// src/testButton.tsx
import { jsx } from "react/jsx-runtime";
var testButton = ({ children, onClick }) => {
  return /* @__PURE__ */ jsx("button", { className: "px-4 py-2 bg-blue-500 text-white rounded", onClick, children });
};
var testButton_default = testButton;

export {
  testButton_default
};

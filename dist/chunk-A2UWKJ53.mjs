// src/testButton.tsx
import { jsx } from "react/jsx-runtime";
var testButton = ({ children, onClick }) => {
  return /* @__PURE__ */ jsx("button", { className: "button", onClick, children });
};
var testButton_default = testButton;

export {
  testButton_default
};

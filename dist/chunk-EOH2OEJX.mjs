// src/AccessibilityButton.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function AccessibilityButton(props) {
  return /* @__PURE__ */ jsx("div", { className: "A-ButtonContainer", children: /* @__PURE__ */ jsxs(
    "button",
    {
      className: "A-Button",
      onClick: props.onClick,
      children: [
        /* @__PURE__ */ jsx("span", { className: "A-icon-span", children: props.icon }),
        props.buttonText
      ]
    }
  ) });
}

export {
  AccessibilityButton
};

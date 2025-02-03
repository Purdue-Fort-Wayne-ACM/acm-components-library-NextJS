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

export {
  AccessibilityButton
};

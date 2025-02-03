// src/Logo.tsx
import { jsx } from "react/jsx-runtime";
function Logo(props) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: "/acmlogo_white.svg",
      height: props.height,
      alt: "The ACM Logo"
    }
  );
}

export {
  Logo
};

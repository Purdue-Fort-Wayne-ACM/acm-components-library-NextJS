import {
  cn
} from "./chunk-V7CNWJT3.mjs";

// src/Logo.tsx
import Image from "next/image";
function Logo({ width = 50, height = 50, className }) {
  return /* @__PURE__ */ React.createElement(
    Image,
    {
      src: "/acmlogo_white.svg",
      width,
      height,
      alt: "Custom Icon",
      className: cn("inline-block", className)
    }
  );
}

export {
  Logo
};

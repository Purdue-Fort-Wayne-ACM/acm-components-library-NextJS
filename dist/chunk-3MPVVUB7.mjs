import {
  cn
} from "./chunk-V7CNWJT3.mjs";

// src/Logo.tsx
import Image from "next/image";
import { jsx } from "react/jsx-runtime";
function Logo({ width = "50px", height = "50px", className }) {
  return /* @__PURE__ */ jsx(
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

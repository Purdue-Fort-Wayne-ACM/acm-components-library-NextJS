import {
  Logo
} from "./chunk-ZJMWHXKP.mjs";

// src/Footer.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function ACMFooter() {
  return /* @__PURE__ */ jsx("div", { className: "footerWrapper", children: /* @__PURE__ */ jsxs("footer", { children: [
    /* @__PURE__ */ jsxs("div", { className: "footerFlex", children: [
      /* @__PURE__ */ jsxs("div", { className: "footerFlexItem", children: [
        /* @__PURE__ */ jsx("h4", { children: " " }),
        /* @__PURE__ */ jsx(Logo, { height: "50px" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footerFlexItem", children: [
        /* @__PURE__ */ jsx("h4", { children: "Resources" }),
        /* @__PURE__ */ jsx("a", { children: "About Us" }),
        /* @__PURE__ */ jsx("a", { children: "Officers" }),
        /* @__PURE__ */ jsx("a", { children: "Github & Contribution" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footerFlexItem", children: [
        /* @__PURE__ */ jsx("h4", { children: "Partners" }),
        /* @__PURE__ */ jsx("a", { children: "OUTspoken" }),
        /* @__PURE__ */ jsx("a", { children: "Generation Action" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footerFlexItem", children: [
        /* @__PURE__ */ jsx("h4", { children: "Policies" }),
        /* @__PURE__ */ jsx("a", { children: "Test Links" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footerFlexItem", children: [
        /* @__PURE__ */ jsx("h4", { children: "PFW Websites" }),
        /* @__PURE__ */ jsx("a", { children: "Department of Comp. Sci" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "disclaimer", children: "This is a PFW-ACM site. The views on this page may or may not represent the views of PFW or the PFW ACM." })
  ] }) });
}

export {
  ACMFooter
};

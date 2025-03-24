var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/Footer.tsx
var Footer_exports = {};
__export(Footer_exports, {
  default: () => Footer
});
module.exports = __toCommonJS(Footer_exports);

// src/Logo.tsx
var import_image = __toESM(require("next/image"));

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/Logo.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Logo({ width = 50, height = 50, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_image.default,
    {
      src: "/acmlogo_white.svg",
      width,
      height,
      alt: "Custom Icon",
      className: cn("inline-block", className)
    }
  );
}

// src/Footer.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "internal-footerWrapper", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("footer", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "internal-footer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "internal-footerFlexItem", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { children: " " }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Logo, { height: 50 })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "internal-footerFlexItem", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { children: "Resources" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { children: "About Us" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { children: "Officers" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { children: "Github & Contribution" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "internal-footerFlexItem", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { children: "Partners" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { children: "OUTspoken" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { children: "Generation Action" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "internal-footerFlexItem", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { children: "Policies" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { children: "Test Links" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "internal-footerFlexItem", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { children: "PFW Websites" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { children: "Department of Comp. Sci" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "internal-disclaimer", children: "This is a PFW-ACM site. The views on this page do not represent the views of Purdue Fort Wayne, but are sanctioned by a student organization within it. If there are concerns please contact acm@pfw.edu. " })
  ] }) });
}

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
  default: () => ACMFooter
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
function Logo({ width = 50, height = 50, className }) {
  return /* @__PURE__ */ React.createElement(
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
function ACMFooter() {
  return /* @__PURE__ */ React.createElement("div", { className: "internal-footerWrapper" }, /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("div", { className: "internal-footer" }, /* @__PURE__ */ React.createElement("div", { className: "internal-footerFlexItem" }, /* @__PURE__ */ React.createElement("h4", null, " "), /* @__PURE__ */ React.createElement(Logo, { height: 50 })), /* @__PURE__ */ React.createElement("div", { className: "internal-footerFlexItem" }, /* @__PURE__ */ React.createElement("h4", null, "Resources"), /* @__PURE__ */ React.createElement("a", null, "About Us"), /* @__PURE__ */ React.createElement("a", null, "Officers"), /* @__PURE__ */ React.createElement("a", null, "Github & Contribution")), /* @__PURE__ */ React.createElement("div", { className: "internal-footerFlexItem" }, /* @__PURE__ */ React.createElement("h4", null, "Partners"), /* @__PURE__ */ React.createElement("a", null, "OUTspoken"), /* @__PURE__ */ React.createElement("a", null, "Generation Action")), /* @__PURE__ */ React.createElement("div", { className: "internal-footerFlexItem" }, /* @__PURE__ */ React.createElement("h4", null, "Policies"), /* @__PURE__ */ React.createElement("a", null, "Test Links")), /* @__PURE__ */ React.createElement("div", { className: "internal-footerFlexItem" }, /* @__PURE__ */ React.createElement("h4", null, "PFW Websites"), /* @__PURE__ */ React.createElement("a", null, "Department of Comp. Sci"))), /* @__PURE__ */ React.createElement("div", { className: "internal-disclaimer" }, "This is a PFW-ACM site. The views on this page do not represent the views of Purdue Fort Wayne. ")));
}

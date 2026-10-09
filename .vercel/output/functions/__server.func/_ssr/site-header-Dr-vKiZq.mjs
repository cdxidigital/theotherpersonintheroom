import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-Dr-vKiZq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		href: "/#episodes",
		label: "Episodes"
	},
	{
		href: "/episodes/sarah",
		label: "Listen"
	},
	{
		href: "/#book",
		label: "The book"
	},
	{
		href: "/release",
		label: "Voices"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 border-b border-[#e7e1d4]/10 bg-[#0c0b09]/95 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-5 py-4 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-display text-sm tracking-wide",
					onClick: () => setOpen(false),
					children: "The other person"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 px-2 text-xs uppercase tracking-[0.22em] md:hidden",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					children: open ? "Close" : "Menu"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden gap-7 text-[11px] uppercase tracking-[0.22em] text-[#e7e1d4]/80 md:flex",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						children: link.label
					}, link.href))
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "flex flex-col gap-1 border-t border-[#e7e1d4]/10 px-5 py-3 md:hidden",
			children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: link.href,
				className: "min-h-11 py-3 text-sm uppercase tracking-[0.18em]",
				onClick: () => setOpen(false),
				children: link.label
			}, link.href))
		})]
	});
}
//#endregion
export { SiteHeader as t };

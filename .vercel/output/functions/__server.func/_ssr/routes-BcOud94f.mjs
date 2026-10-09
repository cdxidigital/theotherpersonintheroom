import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteHeader } from "./site-header-Dr-vKiZq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BcOud94f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var episodes = [
	{
		n: "01",
		title: "Sarah & the Clipboard",
		who: "Sarah",
		with: "Anxiety",
		line: "You've put the chair there again.",
		live: true
	},
	{
		n: "02",
		title: "The Landlord",
		who: "Marcus",
		with: "Depression",
		line: "Tired was the cover story. The lease was already signed."
	},
	{
		n: "03",
		title: "The Security Guard",
		who: "Elena",
		with: "Trauma",
		line: "People who say I'm still here are usually about to stop checking."
	},
	{
		n: "04",
		title: "The Weather",
		who: "David",
		with: "Bipolar",
		line: "You don't apologise for electricity."
	},
	{
		n: "05",
		title: "The Endless Play",
		who: "Priya",
		with: "OCD",
		line: "Forty seconds of safety is still safety."
	},
	{
		n: "06",
		title: "The Ex Who Still Has a Key",
		who: "Tom",
		with: "Addiction",
		line: "I can wait. I have excellent timing."
	},
	{
		n: "07",
		title: "National Emergency",
		who: "Aisha",
		with: "Panic",
		line: "Your schedule is not my problem."
	},
	{
		n: "08",
		title: "Advanced Pattern Recognition",
		who: "Liam",
		with: "Rejection sensitivity",
		line: "A strong bias toward survival."
	},
	{
		n: "09",
		title: "The Hostile Witness",
		who: "Sophie",
		with: "Dysmorphia",
		line: "The measurements do not lie. Kindness does."
	},
	{
		n: "10",
		title: "The Space That Won't Vacate",
		who: "Jordan",
		with: "Grief",
		line: "I do not leave. That is the job."
	},
	{
		n: "11",
		title: "The Thermostat",
		who: "Mei",
		with: "Social anxiety",
		line: "Better to say nothing than to say the thing that makes them leave."
	}
];
function Home() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [saved, setSaved] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (localStorage.getItem("opitr-list")) setSaved(true);
	}, []);
	function join(e) {
		e.preventDefault();
		if (!email.includes("@")) return;
		localStorage.setItem("opitr-list", email);
		setSaved(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-x-hidden bg-[#0c0b09] text-[#e7e1d4]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-0 opacity-[0.07] mix-blend-overlay",
				style: { backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='.55'/></svg>\")" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "top",
				className: "relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-end px-5 pb-16 pt-16 md:px-10 md:pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-6 text-[11px] uppercase tracking-[0.32em] text-[#c4a574]",
						children: "Podcast · Literary release · Perth"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-5xl font-display text-[14vw] leading-[0.86] font-medium tracking-[-0.03em] md:text-[7.4rem]",
						children: "The other person in the room"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-lg leading-snug text-[#e7e1d4]/80",
							children: "Everybody has something sitting in the room with them. This is a conversation with the person, and with the thing."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/episodes/sarah",
								className: "bg-[#e7e1d4] px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#14110c]",
								children: "Play episode one"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#book",
								className: "border border-[#c4a574]/50 px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#c4a574]",
								children: "The book"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chair, { className: "pointer-events-none absolute right-6 bottom-24 hidden w-40 opacity-80 md:block" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-[#e7e1d4]/10 px-5 py-24 md:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-3xl font-display text-3xl leading-tight md:text-5xl",
					children: "Most conversations ask what is wrong with you. This one asks what it is like to live with you."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "device",
				className: "grid gap-12 border-t border-[#e7e1d4]/10 px-5 py-20 md:grid-cols-12 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.28em] text-[#c4a574]",
						children: "The device"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl",
						children: "Three voices. One chair left empty."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-8 text-[#e7e1d4]/80 md:col-span-7 md:col-start-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hosted by Adam James. Each episode sits with a friend, then with the illness they have been living with — not as a monster, and not as a diagnosis read aloud." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Anxiety keeps a clipboard. Depression collects rent. Trauma will not clock off. The humour is on the system. The cost stays with the person." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[#e7e1d4]",
							children: "Funny until it isn't. Hard, without spectacle. Not a smear."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "episodes",
				className: "border-t border-[#e7e1d4]/10 px-5 py-20 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl md:text-6xl",
							children: "Season one"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden text-[11px] uppercase tracking-[0.22em] text-[#e7e1d4]/50 md:block",
							children: "Twelve rooms. One prologue. One close."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "divide-y divide-[#e7e1d4]/10 border-y border-[#e7e1d4]/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-12 items-baseline gap-3 py-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "col-span-2 text-[#c4a574] md:col-span-1",
									children: "00"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "col-span-10 font-display text-2xl md:col-span-5",
									children: "Prologue"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "col-span-12 text-sm text-[#e7e1d4]/55 md:col-span-4",
									children: "Adam James"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "col-span-12 text-right text-[11px] uppercase tracking-[0.18em] text-[#e7e1d4]/45 md:col-span-2",
									children: "Coming soon"
								})
							]
						}), episodes.map((ep) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "live" in ep && ep.live ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/episodes/sarah",
							className: "grid w-full grid-cols-12 items-baseline gap-3 py-5 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "col-span-2 text-[#c4a574] md:col-span-1",
									children: ep.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "col-span-10 font-display text-2xl md:col-span-5",
									children: ep.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "col-span-12 text-sm text-[#e7e1d4]/55 md:col-span-4",
									children: [
										ep.who,
										" + ",
										ep.with
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "col-span-12 text-right text-[11px] uppercase tracking-[0.18em] text-[#c4a574] md:col-span-2",
									children: "Listen · 11 min"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid w-full grid-cols-12 items-baseline gap-3 py-5 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "col-span-2 text-[#c4a574] md:col-span-1",
									children: ep.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "col-span-10 font-display text-2xl md:col-span-5",
									children: ep.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "col-span-12 text-sm text-[#e7e1d4]/55 md:col-span-4",
									children: [
										ep.who,
										" + ",
										ep.with
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "col-span-12 text-right text-[11px] uppercase tracking-[0.18em] text-[#e7e1d4]/45 md:col-span-2",
									children: "Coming soon"
								})
							]
						}) }, ep.n))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-sm text-[#e7e1d4]/50",
						children: "Content notes sit at the top of every episode. No methods. No graphic detail. If a room is too much, leave it."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "book",
				className: "grid items-end gap-10 border-t border-[#e7e1d4]/10 px-5 py-24 md:grid-cols-2 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.28em] text-[#c4a574]",
						children: "Forthcoming"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-5xl leading-[0.9] md:text-7xl",
						children: "The book keeps the third chair."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-[#e7e1d4]/75",
						children: "Literary non-fiction. Interview. Personal essay. The diagnosis describes the experience. It does not get to become the identity."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-[#e7e1d4]/15 p-6 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: "The Other Person in the Room"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-[#e7e1d4]/60",
							children: "Hosted by Adam James"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-8 grid grid-cols-2 gap-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[#e7e1d4]/45",
									children: "Form"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Conversations" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[#e7e1d4]/45",
									children: "Length"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "70–90,000 words" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[#e7e1d4]/45",
									children: "Release"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "In preparation" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 font-display text-xl leading-snug",
							children: "They may rearrange the furniture. They don't get to decide who lives there."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "list",
				className: "border-t border-[#e7e1d4]/10 px-5 py-20 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl md:text-5xl",
						children: "The next rooms."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-[#e7e1d4]/65",
						children: "Episode one is up. Leave an email on this device if you want a reminder for yourself. It is not sent anywhere."
					}),
					saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 font-display text-2xl text-[#c4a574]",
						children: "Saved in this browser only."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: join,
						className: "mt-8 flex max-w-lg flex-col gap-3 sm:flex-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "sr-only",
								htmlFor: "email",
								children: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								type: "email",
								required: true,
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "Email",
								className: "flex-1 border border-[#e7e1d4]/20 bg-transparent px-4 py-3 text-[#e7e1d4] outline-none placeholder:text-[#e7e1d4]/35"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "bg-[#c4a574] px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#14110c]",
								children: "Keep a seat"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-[#e7e1d4]/10 px-5 py-10 text-sm text-[#e7e1d4]/50 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If a conversation lands heavily: Lifeline 13 11 14 · Beyond Blue 1300 22 4636." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3",
					children: ["Adam James, host. Perth. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/release",
						className: "text-[#c4a574]",
						children: "Voice release"
					})]
				})]
			})
		]
	});
}
function Chair({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 160 200",
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M28 36h18v110H28zM114 28h18v118h-18z",
				fill: "#c4a574"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M28 146h104v10H28z",
				fill: "#e7e1d4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 156v28M108 156v28",
				stroke: "#e7e1d4",
				strokeWidth: "8"
			})
		]
	});
}
//#endregion
export { Home as component };

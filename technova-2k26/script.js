/* =====================================================================
   ================= EDIT HERE — ALL WEBSITE CONTENT ===================
   Change text/links inside the quotes only. Save, refresh the page.
   Anything left empty ("") or not starting with http is simply hidden
   (links) or shown as a [PLACEHOLDER] (text) so you can spot it.
   ===================================================================== */
const SITE = {
  fest: {
    name: "TECHNOVA",
    edition: "2K26",
    title: "TECHNOVA 2.0",
    tagline: "Where ideas meet technology.",
    about: "[ADD 2–3 LINES ABOUT TECHNOVA 2K26]",
    date: "15 – 16 October 2026",
    registration: "Day 1 · Registration & Inaugural: 9:00 – 10:00 AM\nDay 2 · Valedictory: 3:00 – 4:30 PM",
    venue: "ATME College of Engineering, Mysuru",
    address: "ATME College of Engineering, Mysuru - 570028",
    organiser: "Department of CSE – AI & ML",
    collegeFull: "ATME College of Engineering, Mysuru",
    collegeLogo: "assets/college-logo.png",     // replace file, keep the name
    ietLogo: "assets/iet-logo.png",
    festArtwork: "assets/hero-art.png",
    campusImage: "assets/college-campus.jpg",
    // Optional documents — shown only when a real https:// link is pasted
    brochureUrl: "",
    rulebookUrl: "",
    scheduleUrl: "",
    driveFolderUrl: "",
    paymentInfoUrl: "",
    mapsUrl: ""                                 // Google Maps share link
  },

  social: {
    instagram: "[PASTE INSTAGRAM URL]",
    linkedin: "[PASTE LINKEDIN URL]"
  },

  contacts: [
    { name: "[CONTACT PERSON 1]", phone: "[PHONE NUMBER]" },
    { name: "[CONTACT PERSON 2]", phone: "[PHONE NUMBER]" },
    { name: "[CONTACT PERSON 3]", phone: "[PHONE NUMBER]" }
  ],

  // One block per event. Add, remove or reorder freely.
  events: [
    { name: "Tech Vault", category: "Tech", description: "[ADD 1–2 LINE DESCRIPTION]", date: "Day 1 · 15 Oct, 10:00–11:30 AM", fee: "₹199 / team", registerUrl: "[PASTE GOOGLE FORM / REGISTRATION URL]" },
    { name: "Mind Matrix", category: "Quiz", description: "[ADD 1–2 LINE DESCRIPTION]", date: "Day 1 · 15 Oct, 11:30 AM–1:30 PM", fee: "₹99 / team", registerUrl: "[PASTE GOOGLE FORM / REGISTRATION URL]" },
    { name: "Cyber Mystery", category: "Cyber", description: "[ADD 1–2 LINE DESCRIPTION]", date: "Day 1 · 15 Oct, 2:00–4:30 PM", fee: "₹249 / team", registerUrl: "https://forms.gle/yEGjYdjyJvePHTWu5" },
    { name: "Mystery Startup", category: "Startup", description: "[ADD 1–2 LINE DESCRIPTION]", date: "Day 2 · 16 Oct, 9:00–11:00 AM", fee: "₹199 / team", registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfYIsxLWVphTSu-B9qYPjWuIdp12BNwcHDXi0AR06RaufbedQ/viewform?usp=header" },
    { name: "Escape Room", category: "Challenge", description: "[ADD 1–2 LINE DESCRIPTION]", date: "Day 2 · 16 Oct, 11:00 AM–12:30 PM", fee: "₹199 / team", registerUrl: "[PASTE GOOGLE FORM / REGISTRATION URL]" },
    { name: "Mission Unlock", category: "Challenge", description: "[ADD 1–2 LINE DESCRIPTION]", date: "Day 2 · 16 Oct, 1:30–3:00 PM", fee: "₹199 / team", registerUrl: "https://forms.gle/re3h25rZo9D2h1AT9" }
  ],

  workshop: {
    enabled: false,                             // set true to show; false hides the whole workshop section
    title: "[WORKSHOP TITLE]",
    description: "[SHORT WORKSHOP DESCRIPTION]",
    date: "[WORKSHOP DATE]",
    registerUrl: "[PASTE WORKSHOP REGISTRATION URL]"
  }
};
/* ============== END OF EDIT AREA — no need to touch below ============== */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const isUrl = v => /^https?:\/\//i.test((v || "").trim());
const get = p => p.split(".").reduce((o, k) => (o ? o[k] : undefined), SITE);
const make = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; };

const ICONS = {
  instagram: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.82-1.95 3.75-1.95 4 0 4.74 2.5 4.74 5.75V21h-4v-5.1c0-1.2-.02-2.8-1.75-2.8-1.75 0-2.02 1.35-2.02 2.7V21h-4V9.75Z"/></svg>'
};

/* Static text, images, single links */
$$("[data-t]").forEach(e => { e.textContent = get(e.dataset.t) || ""; });
$$("[data-img]").forEach(img => {
  img.src = get(img.dataset.img) || "";
  img.addEventListener("error", () => { img.hidden = true; });
});
$$("[data-link]").forEach(a => {
  const u = get(a.dataset.link);
  if (isUrl(u)) { a.href = u; a.hidden = false; }
});

/* Register button: real link when URL is valid, otherwise a calm disabled state */
function registerButton(url, label = "Register") {
  if (isUrl(url)) {
    const a = make("a", "btn primary", label);
    a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer";
    return a;
  }
  const s = make("span", "btn off", "Registration opens soon");
  s.setAttribute("aria-disabled", "true");
  return s;
}

/* Events */
const grid = $("#eventGrid");
SITE.events.forEach(ev => {
  const card = make("article", "card reveal");
  card.append(make("span", "tag", ev.category), make("h3", "", ev.name), make("p", "", ev.description));
  const meta = make("dl", "facts");
  [["When", ev.date], ["Fee", ev.fee]].forEach(([k, v]) => {
    if (!v) return;
    const d = make("div"); d.append(make("dt", "", k), make("dd", "", v)); meta.append(d);
  });
  if (meta.children.length) card.append(meta);
  card.append(registerButton(ev.registerUrl));
  grid.append(card);
});

/* Workshop (hidden when enabled: false) */
const W = SITE.workshop;
if (W && W.enabled) {
  $("#workshop").hidden = false;
  $("#workshopBtn").append(registerButton(W.registerUrl, "Register for workshop"));
}

/* Documents: only populated links appear */
const docs = [["Brochure", "brochureUrl"], ["Rulebook", "rulebookUrl"], ["Schedule", "scheduleUrl"], ["Drive folder", "driveFolderUrl"], ["Payment info", "paymentInfoUrl"]];
docs.forEach(([label, key]) => {
  const u = SITE.fest[key];
  if (!isUrl(u)) return;
  const a = make("a", "doc", label); a.href = u; a.target = "_blank"; a.rel = "noopener noreferrer";
  $("#docs").append(a);
});

/* Contacts */
SITE.contacts.forEach(c => {
  const li = make("li");
  li.append(make("span", "cname", c.name));
  const digits = (c.phone || "").replace(/[^\d+]/g, "");
  if (digits.replace(/\D/g, "").length >= 10) {
    const a = make("a", "", c.phone); a.href = "tel:" + digits; li.append(a);
  } else li.append(make("span", "", c.phone));
  $("#contactList").append(li);
});

/* Social icons (hidden unless a real URL is set) */
$$("[data-social]").forEach(box => {
  [["instagram", "Instagram"], ["linkedin", "LinkedIn"]].forEach(([k, label]) => {
    const u = SITE.social[k];
    if (!isUrl(u)) return;
    const a = make("a", "soc"); a.href = u; a.target = "_blank"; a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", label + " (opens in new tab)"); a.innerHTML = ICONS[k];
    box.append(a);
  });
});

/* Mobile menu */
const btn = $(".menu-btn"), links = $("#links");
btn.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});
links.addEventListener("click", e => { if (e.target.tagName === "A") { links.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); } });

/* Motion: reveal on scroll + gentle hero parallax (skipped for reduced motion) */
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
const cards = $$(".reveal");
if (calm || !("IntersectionObserver" in window)) {
  cards.forEach(c => c.classList.add("in"));
} else {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .15 });
  cards.forEach((c, i) => { c.style.transitionDelay = (i % 3) * 70 + "ms"; io.observe(c); });

  const art = $("#heroImg"); let tick = false;
  addEventListener("scroll", () => {
    if (tick) return; tick = true;
    requestAnimationFrame(() => { art.style.transform = `translateY(${Math.min(scrollY, 600) * -0.05}px)`; tick = false; });
  }, { passive: true });
}

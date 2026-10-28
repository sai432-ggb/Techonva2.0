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
    about: "Where bold ideas meet hands-on challenges, TECHNOVA 2.0 brings curious minds together to build, solve, and innovate.",
    date: "2 – 3 November 2026",
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
    { name: "Kishore", phone: "+91 98866 51313" },
    { name: "Drushya M", phone: "+91 821 778 0343" },
    { name: "Mohammed Ismail", phone: "+916362373573" }
  ],

  // One block per event. Add, remove or reorder freely.
  events: [
    { name: "Tech Vault", category: "Tech", description: "Crack riddles, codes, patterns, and puzzles in a thrilling team escape-room challenge.", date: "2 November 2026 · 10:00–11:30 AM", fee: "₹199", prize: "Winner ₹1,500 · Runner-up ₹1,000", teamSize: "3–4 members", venue: "ATME College of Engineering, Mysuru · Room AB401", facultyCoordinator: { name: "Ms. Apoorva SM", designation: "CSE–AI & ML" }, coordinators: [{ name: "Mohammed Ismail", phone: "63623 73573" }, { name: "Aiman Fathima", phone: "9483159526" }, { name: "Thashwini H R", phone: "7899634637" }], registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdv3LcZCetv9kvJ4qzX3Ge0a3vy7e3v5k58rANfz1jJgjO91Q/viewform?usp=dialog" },
    { name: "Mind Matrix", category: "Quiz", description: "A fun and challenging quiz event for curious minds.", date: "2 November 2026 · 12:00–1:30 PM", fee: "₹99", prize: "Winner ₹1,000 · Runner-up ₹500", teamSize: "2", venue: "ATME College of Engineering, Mysuru", facultyCoordinator: { name: "Ms. Suma H C", designation: "CSE–AI & ML" }, coordinators: [{ name: "Noorain Sadiq Wahab", phone: "8088831463" }, { name: "Nida Shaikh", phone: "9686197328" }, { name: "U Akhila", phone: "63632 72732" }], registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdDQDNDViRCEc2jxB7txV_ulCby6j9Zy5sa-haCb85Q-I6XUg/viewform?usp=publish-editor" },
    { name: "Cyber Mystery", category: "Cyber", description: "Follow each clue and uncover the secrets hidden in this cyber mystery.", date: "3 November 2026 · 9:00–11:30 AM", fee: "₹249", prize: "Winners ₹2,000 · Runners-up ₹1,500", teamSize: "2–4 members", venue: "ATME College of Engineering, Mysuru", facultyCoordinator: { name: "Dr. Hussana Johar R. B.", designation: "CSE–AI & ML" }, coordinators: [{ name: "Umme Hani", phone: "7975534156" }, { name: "Rafeeq Ahmed", phone: "9663125134" }, { name: "Sinchana N", phone: "6361432843" }], registerUrl: "https://forms.gle/yEGjYdjyJvePHTWu5" },
    { name: "Treasure Hunt", category: "Challenge", description: "A teamwork-driven hunt where quick thinking and strategy lead to the treasure.", date: "2 November 2026", fee: "₹249", prize: "Winner ₹3,000", teamSize: "5", venue: "ATME College of Engineering, Mysuru", facultyCoordinator: { name: "Prof. Vanitha G Naik", designation: "CSE–AI & ML" }, coordinators: [{ name: "Yashwant J", phone: "9113595261" }, { name: "Sindhu R S", phone: "+91 9591154726" }, { name: "Pragna P", phone: "+91 76761 36002" }] },
    { name: "Web Wizards", category: "Web Development", description: "Design, develop and deploy a real website using AI tools. Bring your own laptop.", date: "3 November 2026 · 11:30 AM–1:30 PM", fee: "₹150", prize: "Winners ₹1,500 · Runners-up ₹900", teamSize: "3 members", venue: "ATME College of Engineering, Mysuru · Room AB401", facultyCoordinator: { name: "Prof. Harshitha V", designation: "CSE–AI & ML" }, coordinators: [{ name: "Nethra", phone: "93806 80945" }, { name: "CP Pavithra", phone: "91081 56865" }, { name: "Drushya M", phone: "8217780343" }], registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeVQ1s7-3vQq7Z0jfNQlSAGKR7BB-_nOXcXvwoZQuacakZwMQ/viewform?usp=publish-editor" },
    { name: "Mission Unlock", category: "Challenge", description: "Solve, search and conquer in this offline challenge. Mobile phones are not allowed.", date: "3 November 2026 · 11:00 AM–12:00 PM", fee: "₹199", prize: "Winner ₹1,000 · Runner-up ₹500", teamSize: "4 students", venue: "ATME College of Engineering, Mysuru", facultyCoordinator: { name: "Prof. Likitha D", designation: "CSE–AI & ML" }, coordinators: [{ name: "Amruta S Kitturmath", phone: "8217213256" }, { name: "Sai Samarth V", phone: "9353615756" }, { name: "Haney H U", phone: "99458 79834" }, { name: "Dishica M", phone: "7795732923" }], registerUrl: "https://forms.gle/re3h25rZo9D2h1AT9" }
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
  if (ev.facultyCoordinator || ev.coordinators) {
    const coordinators = make("div", "coordinators");
    if (ev.facultyCoordinator) {
      coordinators.append(make("span", "coordinator-label", "Faculty coordinator"));
      coordinators.append(make("span", "faculty-name", ev.facultyCoordinator.name));
      coordinators.append(make("span", "faculty-details", ev.facultyCoordinator.designation));
    }
    if (ev.coordinators) {
      coordinators.append(make("span", "coordinator-label student-label", "Student coordinators"));
      ev.coordinators.forEach(person => {
        const row = make("div", "coordinator");
        row.append(make("span", "", person.name));
        if (person.phone) {
          const phone = make("a", "", person.phone);
          phone.href = "tel:" + person.phone.replace(/[^\d+]/g, "");
          row.append(phone);
        }
        coordinators.append(row);
      });
    }
    card.append(coordinators);
  }
  const meta = make("dl", "facts");
  [["When", ev.date], ["Fee", ev.fee], ["Prize", ev.prize], ["Team size", ev.teamSize], ["Venue", ev.venue]].forEach(([k, v]) => {
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

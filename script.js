(() => {
  const d = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const icons = {
    github: '<svg viewBox="0 0 24 24"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
    email: '<svg viewBox="0 0 24 24"><path d="M2 4h20v16H2V4zm2 2v.5l8 5 8-5V6H4zm16 2.8-8 5-8-5V18h16V8.8z"/></svg>',
    blog: '<svg viewBox="0 0 24 24"><path d="M4 3h12l4 4v14H4V3zm2 2v14h12V8h-3V5H6zm2 5h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9.5z"/></svg>',
    resume: '<svg viewBox="0 0 24 24"><path d="M12 16 7 11l1.4-1.4 2.6 2.6V3h2v9.2l2.6-2.6L17 11l-5 5zM5 19h14v2H5v-2z"/></svg>',
    external: '<svg viewBox="0 0 24 24"><path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z"/></svg>',
  };

  document.title = `${d.name} | ${d.role}`;
  $("logo").textContent = d.handle || d.name;
  $("name").textContent = d.name;
  $("role").textContent = d.role;
  $("tagline").textContent = d.tagline;
  $("photo").src = d.photo;

  const linkMeta = {
    github: ["GitHub", (v) => v],
    email: ["Email", (v) => `mailto:${v}`],
    blog: ["Blog", (v) => v],
    linkedin: ["LinkedIn", (v) => v],
    resume: ["Resume", (v) => v],
  };
  $("hero-links").innerHTML = Object.entries(d.links)
    .filter(([, v]) => v)
    .map(([k, v], i) => {
      const [label, href] = linkMeta[k];
      const ext = k === "email" ? "" : ' target="_blank" rel="noopener"';
      return `<a class="btn${i === 0 ? " primary" : ""}" href="${esc(href(v))}"${ext}>${icons[k]}${label}</a>`;
    })
    .join("");

  $("about-body").innerHTML = d.about.map((p) => `<p>${esc(p)}</p>`).join("");

  if (d.ai) {
    $("ai-intro").textContent = d.ai.intro;
    $("ai-body").innerHTML = d.ai.points
      .map((p) => `<div class="ai-card"><h3>${esc(p.title)}</h3><p>${esc(p.body)}</p></div>`)
      .join("");
    $("ai-tools").innerHTML = `<h3>자주 쓰는 AI 도구</h3><div class="chips">` + d.ai.tools.map((t) => `<span class="chip">${esc(t)}</span>`).join("") + `</div>`;
  } else {
    $("ai").remove();
  }

  $("skills-body").innerHTML = d.skills
    .map((s) => `<div class="skill-card"><h3>${esc(s.group)}</h3><div class="chips">${s.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div></div>`)
    .join("");

  $("projects-body").innerHTML = d.projects
    .map((p) => `
      <article class="project">
        ${p.image ? `<a class="thumb" href="${esc(p.github || p.demo || "#")}" target="_blank" rel="noopener"><img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" /></a>` : ""}
        <div class="top">
          <span class="period">${esc(p.period)}</span>
          <div class="icons">
            ${p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener" aria-label="GitHub">${icons.github}</a>` : ""}
            ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener" aria-label="Demo">${icons.external}</a>` : ""}
          </div>
        </div>
        <h3>${esc(p.title)}${p.badge ? ` <span class="badge">${esc(p.badge)}</span>` : ""}</h3>
        <p>${esc(p.description)}</p>
        ${p.points ? `<ul class="points">${p.points.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
        <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      </article>`)
    .join("");

  $("experience-body").innerHTML = d.experience
    .map((e) => `<li><span class="period">${esc(e.period)}</span><h3>${esc(e.title)}</h3><div class="r">${esc(e.role)}</div>${e.detail ? `<p>${esc(e.detail)}</p>` : ""}</li>`)
    .join("");

  if (d.designs && d.designs.length) {
    $("design-body").innerHTML = d.designs
      .map((c) => `
      <div class="design-case">
        <div class="design-head">
          <div>
            <h3>${esc(c.title)}</h3>
            <p class="design-intro">${esc(c.intro)}</p>
          </div>
          ${c.link ? `<a class="btn" href="${esc(c.link)}" target="_blank" rel="noopener">${esc(c.linkLabel || "보기")}</a>` : ""}
        </div>
        <div class="design-shots">
          ${c.shots.map((s) => `<figure><a href="${esc(s.src)}" target="_blank" rel="noopener"><img src="${esc(s.src)}" alt="${esc(s.caption)}" loading="lazy" /></a><figcaption>${esc(s.caption)}</figcaption></figure>`).join("")}
        </div>
      </div>`)
      .join("");
  } else {
    $("design").remove();
  }

  $("awards-body").innerHTML = (d.awards || [])
    .map((a) => `
      <article class="award">
        ${a.image ? `<figure class="award-photo"><img src="${esc(a.image)}" alt="${esc(a.caption || a.title)}" loading="lazy" />${a.caption ? `<figcaption>${esc(a.caption)}</figcaption>` : ""}</figure>` : ""}
        <div class="award-body">
          <span class="period">${esc(a.period)}</span>
          <h3>${esc(a.title)}</h3>
          <p class="award-highlight">${esc(a.highlight)}</p>
          <ul>${a.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        </div>
      </article>`)
    .join("");

  $("certs-body").innerHTML = (d.certs || [])
    .map((c) => `<li><span class="cert-name">${esc(c.name)}</span><span class="cert-status${/예정|준비/.test(c.status) ? " soon" : ""}">${esc(c.status)}</span>${c.note ? `<small>${esc(c.note)}</small>` : ""}</li>`)
    .join("");
  if (!d.certs || !d.certs.length) document.querySelector(".certs").remove();

  $("mail-btn").href = `mailto:${d.links.email}`;
  $("email-text").textContent = d.links.email;
  $("email-text").href = `mailto:${d.links.email}`;
  $("copy-btn").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(d.links.email); $("copy-btn").textContent = "복사됨"; }
    catch { $("copy-btn").textContent = "직접 복사해 주세요"; }
    setTimeout(() => ($("copy-btn").textContent = "복사"), 1800);
  });
  $("footer").textContent = `© ${new Date().getFullYear()} ${d.name} (${d.handle})`;

  // nav border on scroll
  const nav = document.querySelector(".nav");
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });

  // reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();

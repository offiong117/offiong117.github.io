// Sampson — portfolio site
// Minimal vanilla JS: nav state, scroll reveal, active section highlight

(() => {
  // Nav border on scroll
  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (window.scrollY > 8) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Scroll reveal — add .reveal class to direct children of every section
  const sections = document.querySelectorAll(".section");
  sections.forEach((sec) => {
    Array.from(sec.children).forEach((child) => {
      Array.from(child.children).forEach((grandchild) => grandchild.classList.add("reveal"));
    });
  });

  // Also reveal hero-text blocks
  document.querySelectorAll(".hero-text > *").forEach((el) => el.classList.add("reveal"));

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${Math.min(i, 4) * 60}ms`;
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.05 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  // Active nav link based on which section is visible
  const navLinks = document.querySelectorAll(".nav-links a");
  const targets = Array.from(navLinks)
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && targets.length) {
    const sectionIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((a) => {
              const href = a.getAttribute("href").replace("#", "");
              a.classList.toggle("active", href === id);
            });
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );
    targets.forEach((t) => sectionIO.observe(t));
  }
})();

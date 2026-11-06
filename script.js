// =====================================================
// KARTHIKEYAN S. — Frontend Portfolio
// =====================================================


// ---------- 1. Footer: show the current year automatically ----------
document.getElementById("year").textContent = new Date().getFullYear();


// ---------- 2. Scroll reveal animation ----------
// When a ".reveal" section enters the screen, add the "visible" class
// so the CSS fade-up animation plays (only once per section).
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // stop watching after it has appeared
      }
    });
  },
  { threshold: 0.12 } // trigger when 12% of the section is visible
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

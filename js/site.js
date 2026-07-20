/* ==========================================================================
   TechTide Solutions — site.js
   Dark/Light theme toggle (bonus), scroll progress bar, JS-enhanced
   back-to-top (bonus), and fade/slide scroll-reveal animations.
   ========================================================================== */

(function () {
  "use strict";

  var root = document.documentElement;
  var THEME_KEY = "techtide-theme";

  /* ---------------- Dark / light mode toggle ---------------- */
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.textContent = theme === "light" ? "\u2600\uFE0F" : "\uD83C\uDF19";
      btn.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
    }
  }

  var savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  applyTheme(savedTheme);

  document.addEventListener("DOMContentLoaded", function () {
    var toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        var current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
        var next = current === "light" ? "dark" : "light";
        applyTheme(next);
        localStorage.setItem(THEME_KEY, next);
      });
    }

    /* ---------------- Scroll progress bar + back-to-top visibility ---------------- */
    var backToTop = document.querySelector(".back-to-top");
    var progressBar = document.getElementById("scroll-progress");

    function onScroll() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (backToTop) {
        backToTop.classList.toggle("is-visible", scrollTop > 480);
      }

      if (progressBar) {
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = pct + "%";
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ---------------- Scroll reveal: fade-in / slide-in ---------------- */
    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("in-view"); });
    }
  });
})();

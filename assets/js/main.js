/* =====================================================
   QUISM – MASTER JS (Production Clean Architecture)
   Single Init • No Duplicates • Safe Guards Everywhere
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initHeaderFooter();
  initNavbar();
  initLanguage();
  initScrollProgress();
  initScrollTop();
  initLightbox();
  initReveal();
  initTreeLines();
  initPageFade();
});

/* =====================================================
   1. LOAD HEADER / FOOTER
===================================================== */

function loadHTML(id, file, callback) {
  const el = document.getElementById(id);
  if (!el) return;

  fetch(file)
    .then(res => res.text())
    .then(data => {
      el.innerHTML = data;
      if (callback) callback();
    })
    .catch(err => console.error("Load error:", err));
}

function initHeaderFooter() {
  loadHTML("header-placeholder", "header.html", () => {
    initNavbar();
    initLanguage();
    initGoogleTranslate();   // 👈 ADD THIS
});

  loadHTML("footer-placeholder", "footer.html");
}

/* =====================================================
   2. NAVBAR
===================================================== */

function initNavbar() {
  const toggle = document.querySelector(".navbar-toggle");
  const nav = document.querySelector(".header-nav");
  const overlay = document.querySelector(".nav-overlay");

  if (!toggle || !nav || !overlay) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-open");
    toggle.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("nav-open");
    toggle.classList.remove("active");
  });
}

/* =====================================================
   3. LANGUAGE DROPDOWN
===================================================== */

function initLanguage(){
  const toggle = document.getElementById("lang-toggle");
  const menu = document.getElementById("lang-menu");
const currentLang = document.documentElement.lang;

  if(!toggle || !menu) return;
  
  toggle.addEventListener("click", e => {
    e.stopPropagation();
    menu.classList.toggle("active");
  });

  document.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;

  document.querySelectorAll("#lang-menu a").forEach(link => {
    if (currentPath === link.getAttribute("href") ||
        currentPath.startsWith(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});

/* =====================================================
   4. SCROLL PROGRESS BAR
===================================================== */

function initScrollProgress() {
  const bar = document.querySelector(".scroll-progress");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const total =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = (window.scrollY / total) * 100;
    bar.style.width = progress + "%";
  });
}

/* =====================================================
   5. SCROLL TO TOP
===================================================== */

function initScrollTop() {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 300);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* =====================================================
   6. LIGHTBOX
===================================================== */

function initLightbox() {
  const lightbox = document.querySelector(".lightbox");
  if (!lightbox) return;

  const imgBox = lightbox.querySelector("img");

  document.querySelectorAll("[data-lightbox]").forEach(img => {
    img.addEventListener("click", e => {
      e.preventDefault();
      imgBox.src = img.dataset.full || img.src;
      lightbox.classList.add("open");
      document.body.classList.add("nav-open");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("open");
    imgBox.src = "";
    document.body.classList.remove("nav-open");
  });
}

/* =====================================================
   7. REVEAL OBSERVER
===================================================== */

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

/* =====================================================
   8. TREE LINE STAGGER
===================================================== */

function initTreeLines() {
  const lines = document.querySelectorAll(".tree-line");
  if (!lines.length) return;

  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add("is-visible");
    }, index * 400);
  });
}

/* =====================================================
   9. PAGE FADE SYSTEM (CLEAN)
===================================================== */

function initPageFade() {
  const page = document.querySelector(".page-content");
  if (!page) return;

  document.body.classList.add("is-loaded");
}


/* =====================================================
   10. GOOGLE TRANSLATE
===================================================== */

function initGoogleTranslate(){
  if (typeof google !== "undefined" && google.translate) {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      autoDisplay: false
    }, 'google_translate_element');
  }
}
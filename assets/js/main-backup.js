/* =====================================================
   QUISM – FINAL MASTER JS (CLEAN VERSION)
===================================================== */

console.log("JS Loaded");

/* =====================================================
   0. CORE INIT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  loadPartials();
  initLanguage();
});


/* =====================================================
   1. LOAD HEADER / FOOTER
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header-placeholder", "header.html", initNavbar);
  loadHTML("footer-placeholder", "footer.html");
});

function loadHTML(id, file, callback){
  fetch(file)
    .then(res => res.text())
    .then(data => {
      const el = document.getElementById(id);
      if(!el) return;
      el.innerHTML = data;
      if(callback) callback();
    });
}

function initNavbar(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");

  if(!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

/* =====================================================
   2. LOAD HTML FUNCTION
===================================================== */

function loadHTML(id, file, callback){

  fetch(file)
    .then(res => res.text())
    .then(data => {

      const el = document.getElementById(id);
      if(!el) return;

      el.innerHTML = data;

      if(callback) callback();

    })
    .catch(err => console.error("Partial load error:", err));
}


/* =====================================================
   3. NAVBAR TOGGLE
===================================================== */

function initNavbar(){

  const toggle  = document.getElementById("navToggle");
  const nav     = document.getElementById("mainNav");
  const overlay = document.getElementById("navOverlay");

  if(!toggle || !nav || !overlay) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-open");
  });

  overlay.addEventListener("click", closeNav);

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeNav);
  });

  function closeNav(){
    nav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("nav-open");
  }
}


/* =====================================================
   4. LANGUAGE DROPDOWN
===================================================== */

function initLanguage(){

  document.addEventListener("click", function(e){

    const toggle = e.target.closest("#lang-toggle");
    const menu   = document.getElementById("lang-menu");
    const item   = e.target.closest(".lang-list li");

    if(!menu) return;

    // Toggle open
    if(toggle){
      menu.classList.toggle("active");
      return;
    }

    // Language select
    if(item){
      const lang = item.getAttribute("data-lang");

      const waitGoogle = setInterval(() => {
        const select = document.querySelector(".goog-te-combo");
        if(select){
          clearInterval(waitGoogle);
          select.value = lang;
          select.dispatchEvent(new Event("change"));
        }
      }, 200);

      menu.classList.remove("active");
      return;
    }

    // Outside click close
    menu.classList.remove("active");

  });

}


/* =====================================================
   5. SCROLL PROGRESS
===================================================== */

function initScrollProgress(){

  const bar = document.querySelector(".scroll-progress");
  if(!bar) return;

  window.addEventListener("scroll", () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / total) * 100;
    bar.style.width = progress + "%";
  });
}


/* =====================================================
   6. SCROLL TO TOP
===================================================== */

function initScrollTop(){

  const btn = document.querySelector(".scroll-top");
  if(!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 300);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top:0, behavior:"smooth" });
  });
}


/* =====================================================
   7. LIGHTBOX
===================================================== */

function initLightbox(){

  const lightbox = document.querySelector(".lightbox");
  if(!lightbox) return;

  const imgBox = lightbox.querySelector("img");

  document.querySelectorAll(".lightbox-trigger").forEach(img => {

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
   8. SMOOTH TRANSITION
===================================================== */

function initSmoothTransition(){

  document.body.style.opacity = "1";

  document.querySelectorAll("a[href]").forEach(link => {

    const href = link.getAttribute("href");

    // Skip invalid or same-page links
    if(
      !href ||
      href === "#" ||
      href.startsWith("#") ||
      href.startsWith("http") ||
      href.startsWith("mailto") ||
      link.target === "_blank"
    ) return;

    link.addEventListener("click", e => {

      // যদি already একই পেজ হয়, কিছু করবো না
      if (window.location.pathname.endsWith(href)) return;

      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 300);

    });

  });

}


/* =====================================================
   9. REVEAL OBSERVER
===================================================== */

function initReveal(){

  const elements = document.querySelectorAll(".reveal");
  if(!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },{ threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}


/* =====================================================
   10. SCROLL TOP BTN
===================================================== */

function initScrollTop(){
  const btn = document.getElementById("scrollTopBtn");
  if(!btn) return;

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


/* =====================================================
   11. REVEAL
===================================================== */
function initReveal(){
  const reveals = document.querySelectorAll('.reveal');
  if(!reveals.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
}



/* =====================================================
   12. TREE LINE
===================================================== */

function initTreeLines(){
  const lines = document.querySelectorAll('.tree-line');
  if(!lines.length) return;

  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('is-visible');
    }, index * 600);
  });
}


/* =====================================================
   13. GOOGLE TRANLATE
===================================================== */

function initGoogleTranslate(){
  if (typeof google !== "undefined" && google.translate) {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      autoDisplay: false
    }, 'google_translate_element');
  }
}


/* =====================================================
   14. DOM CONTENT LOADED CALL
===================================================== */

function initGoogleTranslate(){
  if (typeof google !== "undefined" && google.translate) {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      autoDisplay: false
    }, 'google_translate_element');
  }
}
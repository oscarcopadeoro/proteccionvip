// Escoltas VIP — interacciones básicas
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.querySelector(".mobile-nav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Cierra el menú móvil si la ventana crece a escritorio
  window.addEventListener("resize", function () {
    if (window.innerWidth > 980 && mobileNav) {
      mobileNav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("[data-site-header]");
  var toggle = document.querySelector("[data-menu-toggle]");
  var links = document.querySelectorAll("[data-nav-link]");
  var reveals = document.querySelectorAll(".reveal");

  if (header && toggle) {
    toggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if ("IntersectionObserver" in window && reveals.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    reveals.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    reveals.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }
});

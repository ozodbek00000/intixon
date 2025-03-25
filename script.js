// Loading Screen Animation
document.addEventListener("DOMContentLoaded", function () {
  // Simulate loading time (2 seconds)
  setTimeout(function () {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.opacity = "0";
    loadingScreen.style.visibility = "hidden";

    // Enable scrolling on body
    document.body.style.overflow = "auto";
  }, 2000);

  // Disable scrolling while loading
  document.body.style.overflow = "hidden";
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.padding = "0.5rem 1rem";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.padding = "1rem";
    navbar.style.boxShadow = "none";
  }
});

// Mobile menu close on click
const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (window.innerWidth < 992) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });
});

// Initialize carousel
document.addEventListener("DOMContentLoaded", function () {
  var myCarousel = new bootstrap.Carousel(
    document.getElementById("dishesCarousel"),
    {
      interval: 5000,
      wrap: true,
    }
  );
});

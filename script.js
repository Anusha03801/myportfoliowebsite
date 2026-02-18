
  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.getElementById("nav-list");

  mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  // Close menu after clicking a link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  });
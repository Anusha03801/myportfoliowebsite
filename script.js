const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  // Toggle the 'active' class on the menu
  navLinks.classList.toggle('active');
});

// Optional: Close the menu when a link is clicked
navLinks.addEventListener('click', () => {
  navLinks.classList.remove('active');
});
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Responsive Menu Toggle
  const toggleButton = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Dynamic Footer Context
  const yearElement = document.querySelector('[data-year]');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
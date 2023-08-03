import localstorage from './LocalStorage.js';
import popup from './popup.js';
import valid from './validation.js';

const showNav = document.getElementById('show-nav-btn');
const hideNav = document.getElementById('hide-nav-btn');
const mobileMenuLinks = document.getElementById('mobile-menu-links');
const mobileMenu = document.getElementById('mobile-menu');

showNav.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu--show');
  document.body.style.overflow = 'hidden';
});

hideNav.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu--show');
  document.body.style.overflow = 'scroll';
});

mobileMenuLinks.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu--show');
  document.body.style.overflow = 'scroll';
});

localstorage();
popup();
valid();
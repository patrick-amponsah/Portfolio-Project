export default function valid() {
  const contactForm = document.querySelector('.contact-me-form');
  const validText = document.querySelector('#valid-text');
  function showError(input, errorMessage) {
    validText.innerText = errorMessage;
    validText.style.color = 'red';
    input.classList.add('error-input');
  }

  function isValidName(name) {
    const nameRegex = /^[a-zA-Z\s]*$/;
    return nameRegex.test(name);
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email === email.toLowerCase();
  }

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = contactForm.querySelector('input[name="name"]');
    const emailInput = contactForm.querySelector('input[name="email"]');
    const messageInput = contactForm.querySelector('textarea[name="message"]');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();


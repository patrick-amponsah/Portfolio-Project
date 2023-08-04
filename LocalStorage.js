const formString = document.querySelector('.contact-me-form-button');

function saveFormToLocalStorage() {
  const information = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  localStorage.setItem('formString', JSON.stringify(information));
}

if (formString) {
  // Get references to the form elements
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Add input event listeners to the form elements
  nameInput.addEventListener('input', saveFormToLocalStorage);
  emailInput.addEventListener('input', saveFormToLocalStorage);
  messageInput.addEventListener('input', saveFormToLocalStorage);

  // Load and populate the form fields from localStorage if available
  const savedForm = JSON.parse(localStorage.getItem('formString'));
  if (savedForm) {
    nameInput.value = savedForm.name || '';
    emailInput.value = savedForm.email || '';
    messageInput.value = savedForm.message || '';
  }
}

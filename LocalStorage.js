const formString = document.querySelector('.contact-me-form-button');
if (formString) {
  formString.addEventListener('click', (e) => {
    const information = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };
    localStorage.setItem('formString', JSON.stringify(information));
  });
}
const formObj = JSON.parse(localStorage.getItem('formString'));
document.getElementById('name').value = formObj.name;
document.getElementById('email').value = formObj.email;
document.getElementById('message').value = formObj.message;

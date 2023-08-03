const formString = document.querySelector('.contact-me-form-button');
formString.addEventListener('click', () => {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value
  const information = {
    name: name,
    email: email,
    message: message
  };
console.log (information)
  localStorage.setItem('formString', JSON.stringify(information));
});

const formObj = JSON.parse(localStorage.getItem('formString'));
document.getElementById('name').value = formObj.name;
document.getElementById('email').value = formObj.email;
document.getElementById('message').value = formObj.message;

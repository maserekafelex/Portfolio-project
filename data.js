const form = document.querySelector('.form'); // get form by class name
// create formData object to to hold the input
const formData = {
  name: document.getElementById('name').value,
  email: document.getElementById('email').value,
  message: document.getElementById('message').value,
};

let getFormData = window.localStorage.getItem('formData'); // call to get data from localstorage.
// Check inputs fields to the values.
if (getFormData) {
  getFormData = JSON.parse(getFormData);
  document.getElementById('name').value = getFormData.name;
  document.getElementById('email').value = getFormData.email;
  document.getElementById('message').value = getFormData.message;
}
// array iterate through all of the eleme and event listener to each element.
Array.from(form).forEach((element) => {
  element.addEventListener('input', () => {
    formData.name = document.getElementById('name').value;
    formData.email = document.getElementById('email').value;
    formData.message = document.getElementById('message').value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});

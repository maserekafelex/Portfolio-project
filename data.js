function handleSubmit(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Create a JavaScript object with form data
  const formData = {
    name,
    email,
    message,
  };

  // Save the data in local storage
  localStorage.setItem('formData', JSON.stringify(formData));
}

// Add event listener to the form submit event
document.getElementById('contact').addEventListener('submit', handleSubmit);

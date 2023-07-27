function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Reset error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Check if inputs are empty
    if (name.trim() === "") {
        document.getElementById("nameError").textContent = "Please enter your name";
        return false;
    }

    if (email.trim() === "") {
        document.getElementById("emailError").textContent = "Please enter your email";
        return false;
    }

    if (message.trim() === "") {
        document.getElementById("messageError").textContent = "Please enter a message";
        return false;
    }

    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailPattern) || email !== email.toLowerCase()) {
        document.getElementById("emailError").textContent = "Please enter a valid email (lowercase only)";
        return false;
    }

    // Validation successful
    alert("Form submitted successfully!");
    return true;
}
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
  
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");
  
    let isValid = true;
  
    // Reset all error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";
  
    if (name === "") {
      nameError.textContent = "Name is required";
      isValid = false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      emailError.textContent = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      emailError.textContent = "Invalid email format";
      isValid = false;
    }
  
    if (message === "") {
      messageError.textContent = "Message is required";
      isValid = false;
    }
  
    if (isValid) {
      successMessage.textContent = "Form submitted successfully!";
      document.getElementById("contactForm").reset();
    }
  });
  
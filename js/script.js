// This file contains JavaScript functions to generate the welcoming text on the Home Page, validate the "Message Us" form, and display the submitted values upon form submission.

document.addEventListener("DOMContentLoaded", function() {
    // Generate welcoming text
    const welcomeText = "Welcome to Our Company! We are glad to have you here.";
    document.getElementById("welcome-message").innerText = welcomeText;

    // Form validation and submission handling
    const form = document.getElementById("message-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form fields
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Display submitted values
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    });
});
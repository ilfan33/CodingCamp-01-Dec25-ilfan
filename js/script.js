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

// scroll smooth 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href").slice(1)
        const target = document.getElementById(targetId)
        if (target) {
            e.preventDefault()
            target.scrollIntoView({ behavior: "smooth" })
        }
    })
})

    // js untuk carousel

let currentIndex = 0
const slides = document.querySelectorAll(".carousel-slide")
const dots = document.querySelectorAll(".carousel-dot")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")

function updateCarousel() {
slides.forEach((slide, index) => {
    slide.classList.remove("opacity-100", "translate-x-0")
    slide.classList.add("opacity-0", "translate-x-full")
    if (index === currentIndex) {
    slide.classList.add("opacity-100", "translate-x-0")
    slide.classList.remove("opacity-0", "translate-x-full")
    }
})

dots.forEach((dot, index) => {
    dot.classList.toggle("bg-amber-400", index === currentIndex)
    dot.classList.toggle("bg-gray-400", index !== currentIndex)
})
}

prevBtn.addEventListener("click", () => {
currentIndex = (currentIndex - 1 + slides.length) % slides.length
updateCarousel()
})

nextBtn.addEventListener("click", () => {
currentIndex = (currentIndex + 1) % slides.length
updateCarousel()
})

dots.forEach((dot) => {
dot.addEventListener("click", (e) => {
    currentIndex = parseInt(e.target.dataset.index)
    updateCarousel()
})
})


// js untuk header  
    
const hamburger = document.getElementById("hamburger")
const mobileMenu = document.getElementById("mobile-menu")

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
})
    
// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// Close menu after selecting a link

const links = document.querySelectorAll("#navLinks a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

// Contact Form

const contactForm = document.getElementById("contactForm");
const message = document.getElementById("message");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    message.textContent = "Thank you! Your message has been submitted successfully.";

    contactForm.reset();
});
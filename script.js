
// ==============================
// 1. TYPING ANIMATION
// ==============================

const typingText = document.getElementById("typingText");

const words = [
    "Web Developer",
    "CSE Student",
    "Creative Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 110;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ==============================
// 2. MOBILE NAVIGATION
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);

});


// Close menu after clicking a link

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");

    });

});


// ==============================
// 3. ACTIVE NAVIGATION LINK
// ==============================

const sections = document.querySelectorAll("main section");
const navigationLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 130;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ==============================
// 4. BACK TO TOP BUTTON
// ==============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==============================
// 5. AUTOMATIC COPYRIGHT YEAR
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==============================
// 6. CONTACT FORM
// ==============================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {

        formMessage.textContent = "Please fill in all fields.";
        return;

    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent = "Please enter a valid email address.";
        return;

    }

    // Replace with your own email address
    const receiverEmail = "your-email@example.com";

    const subject = encodeURIComponent(
        "Portfolio Contact - " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    formMessage.textContent =
        "Opening your email application...";

    window.location.href =
        `mailto:${receiverEmail}?subject=${subject}&body=${body}`;

});

function toggleMenu() {
    var nav = document.getElementById("navLinks");

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("contactForm")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Form submitted successfully!");
        });
});
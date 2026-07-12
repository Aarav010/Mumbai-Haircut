// Mumbai Haircut Website

console.log("Welcome to Mumbai Haircut!");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
        button.style.transition = "0.3s";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

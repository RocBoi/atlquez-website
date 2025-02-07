document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Fire glow hover effect on buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.boxShadow = "0px 0px 20px rgba(255, 69, 0, 0.8)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.boxShadow = "none";
        });
    });

    // Text fade-in animation on scroll
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));

    // Music pulse effect when hovering over the Feature.fm embed
    const musicFrame = document.querySelector("#music iframe");
    musicFrame.addEventListener("mouseover", () => {
        musicFrame.style.transform = "scale(1.05)";
    });
    musicFrame.addEventListener("mouseleave", () => {
        musicFrame.style.transform = "scale(1)";
    });
});

 

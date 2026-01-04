// Ensure content is visible if JS loads
document.body.classList.remove("no-js");

// Scroll animations
const elements = document.querySelectorAll(".scroll-animate");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.15 }
    );

    elements.forEach(el => observer.observe(el));
} else {
    // Fallback for older browsers
    elements.forEach(el => el.classList.add("show"));
}

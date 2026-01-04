// Enable content if JS loads
document.body.classList.remove("no-js");

// Dark mode toggle
const toggle = document.getElementById("dark-toggle");

if (toggle) {
    toggle.onclick = () => {
        document.body.classList.toggle("dark");
        toggle.textContent =
            document.body.classList.contains("dark") ? "☀️" : "🌙";
    };
}

// Scroll animations
const elements = document.querySelectorAll(".scroll-animate");

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

// Scroll animations
const elements = document.querySelectorAll(".scroll-animate");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });
elements.forEach(el => observer.observe(el));

// Calculator Logic
const display = document.getElementById("calc-display");
const buttons = document.querySelectorAll(".calc-buttons button");

let current = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const val = button.dataset.value;
        const action = button.dataset.action;

        if (action === "clear") {
            current = "";
            display.value = "0";
            return;
        }

        if (action === "del") {
            current = current.slice(0, -1);
            display.value = current || "0";
            return;
        }

        if (action === "equals") {
            try {
                current = eval(current).toString();
                display.value = current;
            } catch {
                display.value = "ERROR";
                current = "";
            }
            return;
        }

        if (val) {
            current += val;
            display.value = current;
        }
    });
});

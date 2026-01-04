document.body.classList.remove("no-js");

/* ===== Scroll Animations ===== */
const elements = document.querySelectorAll(".scroll-animate");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

elements.forEach(el => observer.observe(el));

/* ===== Calculator Logic ===== */

const display = document.getElementById("calc-display");
const buttons = document.querySelectorAll(".calc-buttons button");

let current = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        if (btn.classList.contains("clear")) {
            current = "";
            display.value = "";
            return;
        }

        if (btn.classList.contains("equals")) {
            try {
                current = eval(current).toString();
                display.value = current;
            } catch {
                display.value = "ERROR";
                current = "";
            }
            return;
        }

        const value = btn.getAttribute("data-val");
        current += value;
        display.value = current;
    });
});

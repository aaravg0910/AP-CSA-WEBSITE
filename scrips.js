document.body.classList.remove("no-js");

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

// Calculator logic
let expression = "";

function press(val) {
    expression += val;
    document.getElementById("calc-display").value = expression;
}

function clearCalc() {
    expression = "";
    document.getElementById("calc-display").value = "";
}

function calculate() {
    try {
        const result = Function("return " + expression)();
        expression = result.toString();
        document.getElementById("calc-display").value = expression;
    } catch {
        document.getElementById("calc-display").value = "Error";
        expression = "";
    }
}

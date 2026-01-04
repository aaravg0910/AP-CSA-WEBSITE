const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const value = button.dataset.value;
        const action = button.dataset.action;

        if (action === "clear") {
            expression = "";
            display.value = "0";
            return;
        }

        if (action === "del") {
            expression = expression.slice(0, -1);
            display.value = expression || "0";
            return;
        }

        if (action === "equals") {
            try {
                expression = eval(expression).toString();
                display.value = expression;
            } catch {
                display.value = "ERROR";
                expression = "";
            }
            return;
        }

        if (value) {
            expression += value;
            display.value = expression;
        }
    });
});


const display = document.querySelector(".display h1");

function appendToDisplay(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function calculate() {
    try {
        const expression = display.innerText;

        if (!/^[0-9+\-*/. ]+$/.test(expression)) {
            display.innerText = "Error";
            return;
        }

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        display.innerText = Number.isFinite(result)
            ? String(result)
            : "Error";
    } catch {
        display.innerText = "Error";
    }
}

// Target the single element where the result will be displayed
const resultEl = document.getElementById("sum");

// --- 1. Pure Arithmetic Functions (Reusable) ---
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero!";
    }
    return num1 / num2;
}

// --- 2. Centralized Handler (Reads UI and Updates DOM) ---
function handleCalculation(operation) {
    // Read the inputs fresh when a button is clicked
    const n1 = Number(document.querySelector("#quantity1").value);
    const n2 = Number(document.querySelector("#quantity2").value);
    
    let result;
    let label = "";

    switch(operation) {
        case 'add':
            result = add(n1, n2);
            label = "Sum: ";
            break;
        case 'subtract':
            result = subtract(n1, n2);
            label = "Difference: ";
            break;
        case 'multiply':
            result = multiply(n1, n2);
            label = "Product: ";
            break;
        case 'divide':
            result = divide(n1, n2);
            // If the return is the error string, don't prefix with "Quotient: "
            if (typeof result === "string") {
                resultEl.textContent = result;
                return;
            }
            label = "Quotient: ";
            break;
    }

    resultEl.textContent = label + result;
}

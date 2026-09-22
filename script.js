let sumTxt = "Sum: ";

// Target the single element where the result will be displayed
let resultEl = document.getElementById("sum");

function add() {
    // Move these inside so they read the numbers right when the button is clicked
    let num1 = Number(document.querySelector("#quantity1").value);
    let num2 = Number(document.querySelector("#quantity2").value);
    
    let result = num1 + num2;
    resultEl.textContent = "Sum: " + result;
}

function subtract() {
    let num1 = Number(document.querySelector("#quantity1").value);
    let num2 = Number(document.querySelector("#quantity2").value);
    
    let result = num1 - num2;
    resultEl.textContent = "Difference: " + result; 
}

function divide() {
    let num1 = Number(document.querySelector("#quantity1").value);
    let num2 = Number(document.querySelector("#quantity2").value);
    
    if (num2 === 0) {
        resultEl.textContent = "Cannot divide by zero!";
    } else {
        let result = num1 / num2;
        resultEl.textContent = "Quotient: " + result;
    }
}

function multiply() {
    let num1 = Number(document.querySelector("#quantity1").value);
    let num2 = Number(document.querySelector("#quantity2").value);
    
    let result = num1 * num2;
    resultEl.textContent = "Product: " + result;
}
 

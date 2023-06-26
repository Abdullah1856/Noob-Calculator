let num1 = 8
let num2 = 2
let sumTxt = "Sum: "
document.getElementById("no1").textContent = num1
document.getElementById("no2").textContent = num2

let result1 = document.getElementById("sum") 
function add () {
    let result = num1 + num2
    result1.textContent = "Sum: " + result
}

let result2 = document.getElementById("sum")
function subtract () {
    let result = num1 - num2
    result1.textContent = "Sum: " + result
}

let result3 = document.getElementById("sum")
function divide () {
    let result = num1 / num2
    result3.innerText = "Sum: " + result
}

let result4 = document.getElementById("sum")
function multiply () {
    let result = num1 * num2
    result4.textContent = "Sum: " + result
}
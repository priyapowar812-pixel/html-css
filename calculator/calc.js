let num1, num2;

function getInputValues() {
 num1 = parseInt(document.getElementById("num1").value);
 num2 = parseInt(document.getElementById("num2").value);
}

function addition() {
    getInputValues();
    let result = num1 + num2;
    document.getElementById("add").innerHTML = "Result: " + result;
}

function substraction() {
    getInputValues();
    let result = num1 - num2;
    document.getElementById("sub").innerHTML = "Result: " + result;
}

function multiplication() {
    getInputValues();
    let result = num1 * num2;
    document.getElementById("multi").innerHTML = "Result: " + result;
}

function division() {
    getInputValues();
    if (num2 === 0) {
        document.getElementById("div").innerHTML = "Error: Division by zero";
    } else {
        let result = num1 / num2;
        document.getElementById("div").innerHTML = "Result: " + result;
    }
}

function modulus() {
    getInputValues();
    let result = num1 % num2;
    document.getElementById("mod").innerHTML = "Result: " + result;
}
// script.js

function checkLeapYear() {
    var year = document.getElementById("yearInput").value;
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        document.getElementById("leapYearResult").innerHTML = year + " es un año bisiesto.";
    } else {
        document.getElementById("leapYearResult").innerHTML = year + " no es un año bisiesto.";
    }
}

function performOperation() {
    var operation = document.getElementById("operation").value;
    var operand1 = parseFloat(document.getElementById("operand1").value);
    var operand2 = parseFloat(document.getElementById("operand2").value);
    var result;

    switch (operation) {
        case "sumar":
            result = operand1 + operand2;
            break;
        case "restar":
            result = operand1 - operand2;
            break;
        case "multiplicar":
            result = operand1 * operand2;
            break;
        case "dividir":
            result = operand1 / operand2;
            break;
        case "exponenciar":
            result = Math.pow(operand1, operand2);
            break;
        case "residuo":
            result = operand1 % operand2;
            break;
        default:
            result = -1;
            break;
    }

    document.getElementById("calculationResult").innerHTML = "Resultado: " + result;
}

function calculateTotal() {
    var product = document.getElementById("product").value;
    var quantity = document.getElementById("quantity").value;
    var price;

    switch (product) {
        case "refresco":
            price = 1.00;
            break;
        case "cerveza":
            price = 2.50;
            break;
        case "papitas":
            price = 5.00;
            break;
        default:
            price = 0;
            break;
    }

    var total = quantity * price;
    document.getElementById("total").innerHTML = "Total: S/ " + total.toFixed(2);
}

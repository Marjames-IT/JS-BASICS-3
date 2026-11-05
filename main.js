function calculate() {

    let firstNumber = document.getElementById("num1").value;
    let secondNumber = document.getElementById("num2").value;

  
    if (firstNumber === "" || secondNumber === "") {
        alert("Please enter both numbers.");
        return;
    }

   
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;

    let quotient;

    if (num2 === 0) {
        quotient = "Cannot divide by zero";
    } else {
        quotient = num1 / num2;
    }

   
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("difference").innerHTML = difference;
    document.getElementById("product").innerHTML = product;
    document.getElementById("quotient").innerHTML = quotient;
}

function clearFields() {


    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    
    document.getElementById("sum").innerHTML = "";
    document.getElementById("difference").innerHTML = "";
    document.getElementById("product").innerHTML = "";
    document.getElementById("quotient").innerHTML = "";
}
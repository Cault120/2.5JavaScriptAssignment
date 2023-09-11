function calc(mathFunction) {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result;

    
    num1 = Number(num1);
    num2 = Number(num2);
    
    if (mathFunction == "bt1") {
        result = num1 + num2;
    } else if (mathFunction == "bt2") {
        result = num1 - num2;
    } else if (mathFunction == "bt3") {
        result = num1 * num2;
    } else if (mathFunction == "bt4") {
        result = num1 / num2;
    } else {
        
    }
    displayResult(result);
    
}

function displayResult(result) {
    document.getElementById("output").innerHTML = result;
    
}
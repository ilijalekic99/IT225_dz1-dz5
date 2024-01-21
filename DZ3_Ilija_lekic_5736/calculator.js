function calculate(operation) {
    var firstNumber = parseFloat(document.getElementById('first-number').value);
    var secondNumber = parseFloat(document.getElementById('second-number').value);
    var result;

    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if(secondNumber !== 0) {
                result = firstNumber / secondNumber;
            } else {
                alert("Cannot divide by zero");
                return;
            }
            break;
        default:
            result = "Invalid operation";
            break;
    }

    document.getElementById('result').value = result.toFixed(2);
}

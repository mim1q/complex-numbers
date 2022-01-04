function calculate() {
    const leftStr = document.getElementById('operand_left').value;
    const rightStr = document.getElementById('operand_right').value;
    const operator = document.getElementById('operator').value;

    const left = ComplexNumber.fromString(leftStr);
    const right = ComplexNumber.fromString(rightStr);

    let result;

    switch (operator) {
        case "add":
            result = left.add(right);
        break;
        case "subtract":
            result = left.subtract(right);
        break;
        case "multiply":
            result = left.multiply(right);
        break;
        case "divide":
            result = left.divide(right);
        break;
    }

    document.getElementById('result').innerText = result.toString();
}
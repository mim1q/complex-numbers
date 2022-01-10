function calculate() {
    const leftStr = document.getElementById('operand_left');
    const rightStr = document.getElementById('operand_right');
    const operator = document.getElementById('operator');

    const leftErr = document.getElementById('error_left');
    const rightErr = document.getElementById('error_right');

    let left, right, result;
    let invalid = false;

    leftErrText = '';
    rightErrText = '';

    try { left = ComplexNumber.fromString(leftStr.value); } catch(e) { leftErrText = 'Invalid input'; invalid = true; }
    try { right = ComplexNumber.fromString(rightStr.value); } catch(e) { rightErrText = 'Invalid input'; invalid = true; }
    if (operator.value == 'divide' && right != undefined && right.equal(0)) {
        rightErrText = 'Can\'t divide by 0';
        invalid = true;
    }

    if (invalid) result = 'error';
    else {
        result = doOperation(left, right, operator.value);
    }

    leftErr.innerText = leftErrText;
    rightErr.innerText = rightErrText;
    document.getElementById('result').innerText = result.toString();
}

function doOperation(left, right, operator) {
    let result;
    switch (operator) {
        case 'add':
            result = left.add(right);
        break;
        case 'subtract':
            result = left.subtract(right);
        break;
        case 'multiply':
            result = left.multiply(right);
        break;
        case 'divide':
            result = left.divide(right);
        break;
    }
    return result;
}
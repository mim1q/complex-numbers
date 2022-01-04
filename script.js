function calculate() {
    let leftStr = document.getElementById('operand_left').value;
    let rightStr = document.getElementById('operand_right').value;

    let left = ComplexNumber.fromString(leftStr);
    let right = ComplexNumber.fromString(rightStr);

    document.getElementById('result').innerText = left.add(right).toString();
}
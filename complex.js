class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(operand) {
    return new ComplexNumber(this.real + operand.real, this.imaginary + operand.imaginary);
  }

  multiply(operand) {
    let r = this.real * operand.real - this.imaginary * operand.imaginary;
    let i = this.real * operand.imaginary + this.imaginary * operand.real;

    return new ComplexNumber(r, i);
  }

  toString(parentheses = false) {
    let r = this.real;
    let i = this.imaginary;

    let result = '';

    if(r != 0 || i == 0) {
      result += r;
    } else {
      result += i + 'i';
    }

    if(i != 0 && r != 0) {
      result += i > 0 ? ' + ' : ' - ';
      if(i != 1 && i != -1) {
        result += Math.abs(i);
      }
      result += 'i';
    }

    if(parentheses) return '(' + result + ')';

    return result;
  }
}

class ComplexNumber {
  constructor(imaginary, real) {
    this.imaginary = imaginary;
    this.real = real;
  }

  add(operand) {
    if(operand instanceof ComplexNumber) {
      let result = new ComplexNumber(this.imaginary + operand.imaginary, this.real + operand.real);
      return result;
    }
  }

  multiply(operand) {
    let i = this.real * operand.imaginary + this.imaginary * operand.real;
    let r = this.real * operand.real - this.imaginary * operand.imaginary;

    return new ComplexNumber(i, r);
  }

  toString() {
    let i = this.imaginary;
    let r = this.real;

    let result = '';

    if(r != 0 || i == 0) {
      result += r;
    }

    if(i != 0) {
      result += i > 0 ? ' + ' : ' - ';
      if(i != 1 && i != -1) {
        result += Math.abs(i);
      }
      result += 'i';
    }

    return result;
  }
}

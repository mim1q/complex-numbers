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
    if(operand instanceof ComplexNumber) {
      let r = 0;
      let i = 0;

      let result = new ComplexNumber(i, r);
      return result;
    }
  }

  toString() {
    let i = this.imaginary;
    let r = this.real;

    let result = '';

    if(i == 0) {
      result += r;
      return result;
    }

    if(i == -1)
      result += '-';

    if(i != 1 && i != -1)
      result += i

    result += 'i'

    if(r > 0)
      result += ' + ' + r
    else if(r < 0)
      result += ' - ' + (-r)

    return result;
  }
}

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
      let swap = true;

      if(this.imaginary == 0 || operand.imaginary == 0) {
        swap = false;
      }

      let i = this.real * operand.imaginary + this.imaginary * operand.real;
      let r = this.real * operand.real - this.imaginary * operand.imaginary;

      return new ComplexNumber(i, r);
    }
  }

  toString() {
    let i = this.imaginary;
    let r = this.real;

    let result = '(';

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

    return result + ')';
  }
}

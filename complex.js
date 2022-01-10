class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  static fromString(str) {
    const regexSingle = /^\-?(\d+((\.\d+)?i?)|i)$/;                    // Tests for a number, optionally proceded by an 'i'
    const regexComplex = /^\-?\d+(\.\d+)?[+-](\d+(\.\d+)?)?i$/;        // Tests for a complex number with the real part first
    const regexComplexSwap = /^\-?(\d+(\.\d+)?)?i[+-]\d+(\.\d+)?$/;    // Tests for a complex number with the imaginary part first

    str = str.replaceAll(' ', '');

    let single = regexSingle.test(str);
    let complex = regexComplex.test(str);
    let complexSwap = regexComplexSwap.test(str);

    let r = 0;
    let i = 0;

    if (single) {
      if (str.includes('i')) {
        if (str == 'i' || str == '-i') i = str.replace('i', '1');
        else i = str.replace('i', '');
      }
      else r = str;
    } 
    else if (complex || complexSwap) {
      let parts = [];
      let minus = str.substring(1).indexOf('-') + 1;
      let plus = str.indexOf('+');

      parts[0] = str.substring(0, minus <= 0 ? plus : minus);
      parts[1] = str.substring(minus <= 0 ? plus : minus);

      i = complexSwap ? parts[0] : parts[1];
      r = complexSwap ? parts[1] : parts[0];

      console.log(parts);

      if (/^[+-]?i$/.test(i)) i = i.replace('i', '1');
    } else {
      throw 'InvalidString';
    }

    return new ComplexNumber(parseFloat(r), parseFloat(i));
  }

  add(operand) {
    return new ComplexNumber(this.real + operand.real, this.imaginary + operand.imaginary);
  }

  subtract(operand) {
    return new ComplexNumber(this.real - operand.real, this.imaginary - operand.imaginary);
  }

  multiply(operand) {
    let r = this.real * operand.real - this.imaginary * operand.imaginary;
    let i = this.real * operand.imaginary + this.imaginary * operand.real;

    return new ComplexNumber(r, i);
  }

  divide(operand) {
    let rNum = this.real * operand.real + this.imaginary * operand.imaginary;
    let iNum = this.imaginary * operand.real - this.real * operand.imaginary;
    let den = operand.real ** 2 + operand.imaginary ** 2;
    
    return new ComplexNumber(rNum / den, iNum / den);
  }

  toString(parentheses = false) {
    let r = this.real;
    let i = this.imaginary;

    let result = '';

    if (r != 0 || i == 0) {
      result += Math.round(r * 1000) / 1000;
    } else {
      result += Math.round(i * 1000) / 1000 + 'i';
    }

    if (i != 0 && r != 0) {
      result += i > 0 ? ' + ' : ' - ';
      if (i != 1 && i != -1) {
        result += Math.round(Math.abs(i) * 1000) / 1000;
      }
      result += 'i';
    }

    if (parentheses) return '(' + result + ')';

    return result;
  }
  
  equal(operand) {
    if(operand instanceof ComplexNumber) {
      return this.real == operand.real && this.imaginary == operand.imaginary;
    }
    else {
      return this.real == operand && this.imaginary == 0;
    }
  }
}

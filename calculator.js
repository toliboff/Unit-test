class Calculator {
  constructor() {
    this.result = 0;
  }

  get value() {
    return this.result;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    this.result /= num;
  }
}

const Casio = new Calculator();
Casio.add(5);
Casio.add(10);
Casio.subtract(7);
console.log(Casio.value);

module.exports = Calculator;
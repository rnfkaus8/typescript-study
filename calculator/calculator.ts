type operator = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';
class CalculateParam {
  operator: operator;
  firstNum: number;
  secondNum: number;

  constructor(operator: operator, firstNum: number, secondNum: number) {
    this.operator = operator;
    this.firstNum = firstNum;
    this.secondNum = secondNum;
  }
}


function calculate(param: CalculateParam): number {
  switch (param.operator) {
    case 'add':
      return param.firstNum + param.secondNum;
    case 'subtract':
      return param.firstNum - param.secondNum;
    case 'multiply':
      return param.firstNum * param.secondNum;
    case 'divide':
      return param.firstNum / param.secondNum;
    case 'remainder':
      return param.firstNum % param.secondNum;
    default:
      throw new Error('unknown operator');
  }
}

console.log(calculate(new CalculateParam('add', 1, 3)));
console.log(calculate(new CalculateParam('subtract', 3, 1)));
console.log(calculate(new CalculateParam('multiply', 4, 2)));
console.log(calculate(new CalculateParam('divide', 4, 2)));
console.log(calculate(new CalculateParam('remainder', 5, 2)));

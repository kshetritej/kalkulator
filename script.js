function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  a === 0 ? "lol" : a / b;
}

let firstNumber = null;
let operator = null;
let secondNumber = null;


function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return addition(firstNumber, secondNumber);
    case "-":
      return subtraction(firstNumber, secondNumber);
    case "*":
      return multiplication(firstNumber, secondNumber);
    case "/":
      return division(firstNumber, secondNumber);
    default:
      return "HUH!";
  }
}

console.log(operate("+",3,4))
function add(a,b){
  return (a+b);
}

function subtract(a,b){
  return (a-b);
}

function multiply(a,b){
  return (a*b);
}

function divide(a,b){
  if(b === 0){
    return "LOL";
  }
  else{
    return (a/b);
  }
}


let firstNumber = "";
let operator = "";
let secondNumber = "";

const defaultScreenValue = 0;


function operate(operator,firstNumber,secondNumber){
  switch(operator){
    case "+":
      return add(firstNumber,secondNumber);
    case "-":
      return subtract(firstNumber,secondNumber);
    case "*":
      return multiply(firstNumber,secondNumber);
    case "/":
      return divide(firstNumber,secondNumber);
    default:
      return "HUH!"
  }
}
// console.log(operate("+",3,3)); //

function updateDisplay(){

}


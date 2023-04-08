function add(a, b) {
  return (a + b);
}

function subtract(a, b) {
  return (a - b);
}

function multiply(a, b) {
  return (a * b);
}

function divide(a, b) {
  if (b === 0) {
    return "LOL";
  }
  else {
    return (a / b);
  }
}


let firstNumber = "";
let operator = "";
let secondNumber = "";

let defaultScreenValue = '0';


function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
    default:
      return "HUH!"
  }
}
// console.log(operate("+",3,3)); //



//? Display Value

// const numberButtons = document.querySelectorAll("#btn");
// function populateDisplay() {
//   numberButtons.forEach(number => {
//     number.addEventListener("click", () => {
//       const value = number.textContent;
//       console.log(value); 
//       updateDisplay(value);
//     });
//   });
// }

const buttons = document.querySelectorAll("#btn");
const screen = document.querySelector(".calc-screen");


function populate(){
  buttons.forEach(button => {
    button.addEventListener("click",()=>{
      let value = button.textContent;
      screen.textContent += value;
      console.log(value);
    });
  });
}
populate(); // can populate screen but not as intended


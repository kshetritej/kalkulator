let firstNumber = null;
let operator = null;
let secondNumber = null;
let displayValue = null;
let result = "";

// All Clear Button
const clearButton = document.querySelector("#clear-btn");
clearButton.addEventListener("click",()=>{
  firstNumber = null;
  secondNumber = null;
  operator = null;
  screen.textContent = "0";
})


// Create the functions that populate the display 
//when you click the number buttons. 
//You should be storing the ‘display value’ 
//in a variable somewhere for use in the next step.
const numberButtons = document.querySelectorAll(".btn");
const screen = document.querySelector(".calc-screen");
numberButtons.forEach(numberButton => {
  numberButton.addEventListener("click", () => {
    screenContent = screen.textContent;
    if(screenContent == "0" || screenContent == 0){
      screen.textContent = numberButton.textContent;
      displayValue = screen.textContent;
    }
    else{
      screen.textContent += numberButton.textContent;
      displayValue = screen.textContent;
    }
    displayValue =screen.textContent;

    if(!operator){
      firstNumber = displayValue;
      console.log(firstNumber);
    }
    if(operator && firstNumber){
      secondNumber = displayValue;
      console.log(secondNumber);
    }
    if(operator && firstNumber  && secondNumber){
      result = operate(operator, Number(firstNumber),Number(secondNumber));
      screen.textContent = result;

      firstNumber = result;
      operator = "";
      secondNumber = "";
    }
  });
});

/*Make the calculator work! 
You’ll need to store the first number 
that is input into the calculator when a user presses an operator,
 and also save which operation has been chosen and then operate() 
 on them when the user presses the “=” key */
 
 const operatorButtons = document.querySelectorAll("#operator");
 operatorButtons.forEach(operatorButton =>{
  operatorButton.addEventListener("click",()=>{
    operator = operatorButton.textContent;
    screen.textContent = "";

  });
 });

 function calculate(){

 }
 //Equal Button
 const equalButton = document.querySelector("#equal-btn");
 equalButton.addEventListener("click",()=>{
  calculate();
 })

//  Operation functions
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
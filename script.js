
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

const container = document.querySelector(".container");
const calcDisplay = document.querySelector(".calc-screen");
const clearBtn = document.querySelector(".clear-btn");
const percentageBtn = document.querySelector(".percentage-btn");
const buttons = document.querySelectorAll("#btn");

clearBtn.addEventListener("click",()=>{
  calcDisplay.textContent= "0";
})



function getInput(){
  buttons.forEach(button => {
    button.addEventListener("click",()=>{
      input = button.textContent;
      return input;
    });
  });
}

console.log(getInput());
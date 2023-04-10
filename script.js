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



let a = "";
let operator = "";
let b = "";
const defaultValue = "0";

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "%":
      return percentage(a,b);
    default:
      return "HUH!"
  }
}

//clear btn
const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  screen.textContent = "O";
  a = "";
  b = "";
  operator = "";
});


// number buttons
const numberButtons = document.querySelectorAll("#btn");
const screen = document.querySelector(".calc-screen");
numberButtons.forEach(numberButton => {
  numberButton.addEventListener("click", () => {
    let screenValue = screen.textContent;
    
    if (screenValue === "O") {
      screen.textContent = numberButton.textContent;
    } else {
      screen.textContent += numberButton.textContent;
    }
    
    //if operator is not present the entered value will be 
    //stored as 'a' while if 'operator' is present entered value
    //will be treated as second number
    if (!operator) {
      a = screen.textContent; // a is first Number
    } else {
      b = screen.textContent; // b is second Number
    }
  });
});

// operator buttons
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener("click", () => {
    operator = operatorButton.textContent;
    if (a) {
      // if there's a first number, store it and clear the screen
      storedValue = a;
      screen.textContent = "";
    } else {
      // otherwise, set the default value for a as defaultValue which is '0'
      storedValue = defaultValue;
    }
  });
});

// equal button
const equalButton = document.querySelector(".equal-btn");
equalButton.addEventListener("click", () => {
  if (a && b && operator) {
    // perform the calculation
    const result = operate(operator, Number(a), Number(b));
    
    // update the screen with the result
    screen.textContent = result;
    
    // store the result as the first number for the next calculation
    a = result;
    
    // clear the second number and operator
    b = "";
    operator = "";
  }
});

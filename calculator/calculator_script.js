const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentInput);
  });
});

const calculatorScreen = document.querySelector(".Calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

let prevInput = "0";
let calculationOpertaor = "";
let currentInput = "0";

const inputNumber = (number) => {
  if (currentInput === "0") {
    currentInput = number;
  } else {
    currentInput += number;
  }
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  prevInput = currentInput;
  calculationOpertaor = operator;
  currentInput = "0";
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentInput);
});

const calculate = () => {
  let result = 0;
  switch (calculationOpertaor) {
    case "+":
      result = parseFloat(prevInput) + parseFloat(currentInput);
      break;
    case "-":
      result = parseFloat(prevInput) - parseFloat(currentInput);
      break;
    case "*":
      result = parseFloat(prevInput) * parseFloat(currentInput);
      break;
    case "/":
      result = parseFloat(prevInput) / parseFloat(currentInput);
      break;
    default:
      return;
  }
  currentInput = result.toString();
  calculationOpertaor = "";
};

const clearButton = document.querySelector(".all-clear");

clearButton.addEventListener("click", () => {
  clearAll();
  updateScreen(currentInput);
});

const clearAll = () => {
  prevInput = "0";
  calculationOpertaor = "";
  currentInput = "0";
};

const decimalPoint = document.querySelector(".decimal");

decimalPoint.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentInput);
});

const inputDecimal = (number) => {
  if (currentInput.includes(".") === false) {
    currentInput += number;
  }
};

const calculatePercent = () => {
  currentInput = parseFloat(currentInput) / 100;
};

const percent = document.querySelector(".percentage");

percent.addEventListener("click", (event) => {
  calculatePercent();
  updateScreen(currentInput);
});

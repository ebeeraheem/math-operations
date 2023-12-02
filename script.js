// Get input fields
const numOne = document.querySelector("#numOne");
const numTwo = document.querySelector("#numTwo");

// // Get values
// const inputOne = numOne.value;
// const inputTwo = numTwo.value;

const result = document.querySelector("#result");

// Get buttons
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

// OPERATOR FUNCTIONS
// Add
function add() {
  if (numOne.value !== "" && numTwo.value !== "") {
    result.textContent = Number(numOne.value) + Number(numTwo.value);
  } else {
    result.textContent = "Input can't be blank!";
  }
  event.preventDefault();

  numOne.value = "";
  numTwo.value = "";
}

// Subtract
function subtract() {
  if (numOne.value !== "" && numTwo.value !== "") {
    result.textContent = Number(numOne.value) - Number(numTwo.value);
  } else {
    result.textContent = "Input can't be blank!";
  }
  event.preventDefault();

  numOne.value = "";
  numTwo.value = "";
}

// Multiply
function multiply() {
  if (numOne.value !== "" && numTwo.value !== "") {
    result.textContent = Number(numOne.value) * Number(numTwo.value);
  } else {
    result.textContent = "Input can't be blank!";
  }
  event.preventDefault();

  numOne.value = "";
  numTwo.value = "";
}

// Divide
function divide() {
  let answer = Number(numOne.value) / Number(numTwo.value);

  if (numOne.value !== "" && numTwo.value !== "") {
    if (Math.floor(answer) !== answer) {
      result.textContent = answer.toFixed(2);
    } else {
      result.textContent = answer;
    }
  } else {
    result.textContent = "Input can't be blank!";
  }
  event.preventDefault();

  numOne.value = "";
  numTwo.value = "";
}

// Listen to click events
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

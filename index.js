var currentString = "";
let outputValue = document.getElementById("display");
// taking operators input
let operators = document.querySelectorAll(".operator");
// taking operand input
let operands = document.querySelectorAll("div.numbers");
// taking dlet button
let del = document.getElementById("delete");
// taking rest button
let reset = document.getElementById("reset");
// taking result button
let result = document.getElementById("result");

document.addEventListener("DOMContentLoaded", initApp());

function initApp() {
  //delete last charcter
  del.addEventListener("click", () => {
    currentString = currentString.toString().slice(0, -1);
    outputValue.innerHTML = currentString;
  });

  // clear all
  reset.addEventListener("click", () => {
    currentString = "";
    outputValue.innerHTML = currentString;
  });

  //printing the result
  result.addEventListener("click", () => {
    let finalString = currentString.replace(/[x]/g, "*");
    function isInteger(finalString) {
      let answer = eval(finalString);

      if (answer % 2 === 0) {
        return answer.toFixed(0);
      } else {
        return answer.toFixed(2);
      }
    }

    outputValue.innerHTML = isInteger(finalString);
  });
  for (let i = 0; i < operands.length; i++) {
    operands[i].addEventListener("click", (e) => {
      currentString += e.target.innerHTML;
      outputValue.innerHTML = currentString;
    });
  }

  //taking operator input
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", (e) => {
      var lastChar = currentString.toString().charAt(currentString.length - 1);

      if (
        lastChar === "1" ||
        lastChar === "2" ||
        lastChar === "3" ||
        lastChar === "4" ||
        lastChar === "5" ||
        lastChar === "6" ||
        lastChar === "7" ||
        lastChar === "8" ||
        lastChar === "9" ||
        lastChar === "0"
      ) {
        currentString += e.target.innerHTML;
        outputValue.innerHTML = currentString;
      } else {
        outputValue.innerHTML = currentString
          .toString()
          .replace(lastChar, e.target.innerHTML);
      }
    });
  }
}

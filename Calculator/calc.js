const display = document.querySelector(".display");
let result = "";
let waitingForOperand = false;

function calculator() {
  //Using eventlistener to update when button is clicked
  document.querySelector(".calculator").addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const buttonValue = e.target.textContent;
      operation(buttonValue);
    }
  });
  //Initializing keyboard listening
  // keyboardListener();
}

//function to handle basic operations
function operation(value) {
  let toInt = 0;
  let answer = 0;

  switch (value) {
    case "=":
      {
        try {
          if (
            result.includes("sinh") ||
            result.includes("cosh") ||
            result.includes("tanh") ||
            result.includes("sin") ||
            result.includes("cos") ||
            result.includes("tan")
          ) {
            // Matching number after trigonometric function
            const match = result.match(
              /(sinh|cosh|tanh|sin|cos|tan)\(([^)]+)\)/
            );
            if (match) {
              // Extracting the trigonometric function and the number to calculate
              const extractTrigFun = match[1];
              const numToCalc = parseFloat(match[2].trim());

              // Checking if numToCalc is a valid number
              if (!isNaN(numToCalc)) {
                switch (extractTrigFun) {
                  case "sinh":
                    answer = Math.sinh(numToCalc).toExponential(6);
                    break;
                  case "cosh":
                    answer = Math.cosh(numToCalc).toExponential(6);
                    break;
                  case "tanh":
                    answer = Math.tanh(numToCalc).toExponential(6);
                    break;
                  case "sin":
                    answer = Math.sin(numToCalc).toExponential(6);
                    break;
                  case "cos":
                    answer = Math.cos(numToCalc).toExponential(6);
                    break;
                  case "tan":
                    answer = Math.tan(numToCalc).toExponential(6);
                    break;
                }

                // Replace "e+" to display exponential in a simpler format
                result = answer.toString().replace("e+", "e");
              } 
              
              else {
                result = "Not a number"; // Ensure the value after trig function is valid
              }
            } else {
              result = "Not a valid trig function format";
            }
          }
        } catch (e) {
          result = "Calculation error";
        }
      }
      break;

    case "AC":
      result = "";
      break;

    case "+/-":
      if (result.startsWith("-")) {
        // Removing negative sign if present
        result = result.substring(1);
      } else if (result !== "" && result !== "0") {
        // Adding negative sign if not already negative
        result = "-" + result;
      }
      break;

    case "%":
      result = (parseFloat(result) / 100).toString();
      break;

    case "Rand":
      result = Math.random().toFixed(8);
      break;

    case "sinh":
      result = "sinh";
      waitingForOperand = true;
      break;

    case "cosh":
      result = "cosh";
      waitingForOperand = true;
      break;

    case "tanh":
      result = "tanh";
      waitingForOperand = true;
      break;

    case "sin":
      result = "sin";
      waitingForOperand = true;
      break;

    case "cos":
      result = "cos";
      waitingForOperand = true;
      break;

    case "tan":
      result = "tan";
      waitingForOperand = true;
      break;

    case "π":
      let piValue = Math.PI.toFixed(8);
      toInt = parseFloat(result);
      if (!isNaN(toInt)) {
        result = toInt * piValue;
      } else {
        result = piValue.toString();
      }
      break;

    case "x!":
      try {
        //converting current num for factorial
        const curNum = parseFloat(result.trim(), 10);

        //Ensure input is not negative
        if (isNaN(curNum) || curNum < 0 || !Number.isInteger(curNum)) {
          result = "Invalid number";
        } else {
          result = factorialRecursive(curNum).toExponential(6);
        }
      } catch (e) {
        result = "Unexpected calculator Error";
      }

      break;

    default:
      if (waitingForOperand && !isNaN(value)) {
        result += value;
        waitingForOperand = false; // Reset the flag as we have the operand now
      } else {
        result += value; // Handles other values by appending to the result
      }
      break;
  }
  display.value = result; // Updates the display with the current result
}

function convertAngle(input, format) {
  return format === "Deg" ? input * (Math.PI / 180) : input * (180 / Math.PI);
}

function factorialRecursive(n) {
  if (n < 0) {
    return;
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorialRecursive(n - 1);
}

/*
//Listening to use keyboard input
function keyboardListener() {
 
    document.addEventListener('keydown', function (e) {
        const keyValue = e.key;
 
        const allowedCommands = ['ArrowLeft', 'ArrowRight', 'Backspace', 'Delete', 'Enter', 'Escape'];
        //Since enter and = are identical and Escape and Clear are identical, store them in different variables and chose them randomly
        const keyMap = {
            'Enter': '=',
            'Backspace': 'AC',
            'Escape': 'AC'
        };
 
 
        //preventing invalid keys
        if (!allowedCommands.includes(keyValue) && isNaN(Number(keyValue))&& keyValue !== '(' && keyValue !== ')') {
            e.preventDefault();
            return;
        }
       
 // Handling special keys
 if (keyMap.hasOwnProperty(keyValue)) {
    basicOperation(keyMap[keyValue]);
    return;
}
        //handling parenthesis
        if (keyValue === '(' || keyValue === ')') {
            basicOperation(keyValue);
            return;
 
        }
 
        //Handling ctrl = for selecting = sign and ctrl 8 for * 
      
        if (e.shiftKey && keyValue === '*') {
            basicOperation('*');
            return;
        }
 
 
        const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', 'Clear'];
 
        //Checking if user key is on the list
        if (keysAllowed.includes(keyValue)) {
            basicOperation(keyValue);
        }
        else {
            display.textContent = "Wrong Key";
        }
    });
}
*/
calculator();

const display = document.querySelector('.display');
let result = "";
let waitingForOperand = false;

// Initialize calculator with event delegation
function calculator() {
  document.querySelector('.calculator').addEventListener('click', function (e) {
    const button = e.target;

    if (button.tagName !== 'BUTTON') return;

    // Check for each type of input
    if (button.dataset.num !== undefined) {
      appendToResult(button.dataset.num);
    } else if (button.dataset.op !== undefined) {
      operation(button.dataset.op);
    } else if (button.dataset.func !== undefined) {
      handleFunction(button.dataset.func);
    }
  });
}

// Handle numbers
function appendToResult(value) {
  if (waitingForOperand) {
    result += value;
    waitingForOperand = false;
  } else {
    result += value;
  }
  display.value = result;
}

// Handle basic and scientific operations
function operation(value) {
  let answer = 0;

  switch (value) {
    case '=':
      try {
        // Check for trigonometric functions
        const trigMatch = result.match(/(sinh|cosh|tanh|sin|cos|tan)\(([^)]+)\)/) || result.match(/(sinh|cosh|tanh|sin|cos|tan)(\d+)/);
        if (trigMatch) {
          const func = trigMatch[1];
          const num = parseFloat(trigMatch[2].trim());

          if (!isNaN(num)) {
            switch (func) {
              case 'sinh': answer = Math.sinh(num); break;
              case 'cosh': answer = Math.cosh(num); break;
              case 'tanh': answer = Math.tanh(num); break;
              case 'sin': answer = Math.sin(num); break;
              case 'cos': answer = Math.cos(num); break;
              case 'tan': answer = Math.tan(num); break;
            }
            result = answer.toString().replace("e+", "e");
          } else {
            result = "Not a number";
          }
        }

        else if (result.includes('^')) {
          const [base, exponent] = result.split('^').map(Number);
          if (!isNaN(base) && !isNaN(exponent)) {
            result = Math.pow(base, exponent).toString();
          } else {
            result = "Error";
          }
        }

        else {
          result = eval(result.trim()).toString();
        }
      }
      catch (e) {
          result = "Error";
        }

        break;

    default:
      result += value;
      break;
  }

  display.value = result;
}

// Handle special functions
function handleFunction(func) {
  let num;

  switch (func) {
    case 'AC':
      result = '';
      break;

    case '+/-':
      result = result.startsWith('-') ? result.slice(1) : '-' + result;
      break;

    case '%':
      result = (parseFloat(result) / 100).toString();
      break;

    case 'Rand':
      result = Math.random().toFixed(8);
      break;

    case 'sinh': case 'cosh': case 'tanh':
    case 'sin': case 'cos': case 'tan':
      result = `${func}`;
      waitingForOperand = true;
      break;

    case 'π':
      const pi = Math.PI;
      const val = parseFloat(result);
      result = !isNaN(val) ? (val * pi).toString().replace("e+", "e") : pi.toFixed(8);
      break;

    case 'x!':
      num = parseFloat(result.trim());
      if (isNaN(num) || !Number.isInteger(num)) {
        result = "Num first";
      } else if (num < 0) {
        result = "Cannot be negative";
      } else {
        result = factorialRecursive(num).toString();
      }
      break;

    case 'log':
      num = parseFloat(result.trim());
      if (isNaN(num) || num <= 0) {
        result = "Num First"; // log10 undefined for 0 or negative numbers
      } else {
        result = Math.log10(num).toString();
      }
      break;

    case 'e':
      try {
        result = (parseFloat(result) * Math.E).toString();
      } catch {
        result = "Invalid e";
      }
      break;

    case 'EE':
      if (!result.includes('e')) {
        result += 'e';
      }
      break;

    case 'ln':
      num = parseFloat(result.trim());
      if (isNaN(num) || num <= 0) {
        result = "Num First"; // ln undefined for 0 or negative numbers
      } else {
        result = Math.log(num).toString();
      }
      break;

    case '^':
      // Add caret to display for user to enter exponent
      if (!result.includes('^')) {
        result += '^';
      }
      break;

    case 'Mode':
      // You can implement mode switching logic here (rad/deg)
      break;

    case 'Rad':
    case 'Deg':
      // Placeholder for future angle format switching
      break;

    default:
      break;
  }

  display.value = result;
}

// Recursive factorial function
function factorialRecursive(n) {
  return n <= 1 ? 1 : n * factorialRecursive(n - 1);
}

calculator();

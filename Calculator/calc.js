const display = document.querySelector('.display');
let result = "";

function calculator() {

    //Using eventlistener to update when button is clicked
    document.querySelector('.calculator').addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            const buttonValue = e.target.textContent;
            basicOperation(buttonValue);
        }

    });
    //Initializing keyboard listening 
    keyboardListener();
}

//function to handle basic operations
function basicOperation(value) {
    let toInt = 0;
    let answer = 0; 

    switch (value) {
        case '=':
            try {
                result = eval(result.trim()).toString();
            } catch (e) {
                result = "Error";
            }
            break;

        case 'AC':
            result = '';
            break;

        case '+/-':
            if (result.startsWith("-")) {
                // Removing negative sign if present
                result = result.substring(1);
            } else if (result !== "" && result !== "0") {
                // Adding negative sign if not already negative
                result = "-" + result;
            }
            break;

        case '%':
            result = (parseFloat(result) / 100).toString();
            break;

        case 'Rand':
            result = Math.random().toFixed(8);
            break;

        case 'sinh':
        case 'cosh':
        case 'tanh':
            toInt = parseFloat(result);
            answer = (value === 'sinh' ? Math.sinh(toInt) : (value === 'cosh' ? Math.cosh(toInt): Math.tanh(toInt))).toExponential(6);
            result = answer.replace("e+", "e");
            break;

        case 'π':
            let piValue = Math.PI.toFixed(9);
            result *=piValue;
            break;

        default:
            result += value;  // Handles other values by appending to the result
            break;
    }
    display.value = result;  // Updates the display with the current result
}


function cursorDisplay() {
    if (display.value.endsWith('|')) {
        display.value = display.value.slice(0, -1); //removes couser
    }
    else {
        display.value += '|';
    }
}
setInterval(cursorDisplay, 500);

//Listening to use keyboard input
function keyboardListener() {

    document.addEventListener('keydown', function (e) {
        const keyValue = e.key;

        //keys to ignore: Do nothing when those keys are pressed
        if (['Control', 'Shift', 'Alt'].includes(keyValue)) {
            return;
        }

        //Since enter and = are identical and Escape and Clear are identical, store them in different variables and chose them randomly
        const keyMap = {
            'Enter': '=',
            'Backspace': 'AC',
            'Escape': 'AC'
        };

        //Handling ctrl = for selecting = sign and ctrl 8 for * 
        if (e.ctrlKey && keyValue === '=') {
            basicOperation('=');
            return;
        }
        else if (e.ctrlKey && keyValue === '8') {
            basicOperation('*');
            return;
        }

        //Choose identical keys randomly 
        const value = keyMap[keyValue] || keyValue;

        const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', 'Enter', 'Escape', 'Clear'];

        //Checking if user key is on the list
        if (keysAllowed.includes(keyValue) || keyValue in keyMap) {
            basicOperation(value);
        }
        else {
            display.textContent = "Wrong Key";
        }
    });
}

calculator();
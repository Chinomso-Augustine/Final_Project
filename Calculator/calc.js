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
                //check for sinh, cosh, and tanh
                if (result.includes('sinh(') || result.includes('cosh(') || result.includes('tanh')) {

                    //capture the function name
                    const trigOperator = result.substring(0, result.includes('('));

                    //capture the value b\w parenthesis using substring which extracts parts of strings b/w start and end
                    //first: find index of opening parenthesis
                    //2nd: find index of closing p
                    const innerVal = result.substring(result.indexOf('(') + 1, result.indexOf(')'));

                    //convert value to float
                    toInt = parseFloat(innerVal);

                    //calculate based on input
                    if (!isNaN(toInt)) {
                        answer = (trigOperator === 'sinh' ? Math.sinh(toInt) :
                            (trigOperator === 'cosh' ? Math.cosh(toInt) :
                                Math.tanh(toInt))).toExponential(6);
                        result = answer.replace("e+", "e");

                    }
                    else {
                        result = "error";
                    }
                }
                else {
                    result = eval(result.trim()).toString();
                }
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

            result += value + '()';
            display.value = result;

            const position = result.length - 1;
            display.setSelectionRange(position, position);
            display.focus();
            break;
        case 'π':
            let piValue = Math.PI.toFixed(8);
            result *= piValue;
            break;

        default:
            result += value;  // Handles other values by appending to the result
            break;
    }
    display.value = result;  // Updates the display with the current result
}


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
        //Ignoring control, shift, and alt
        if (['Control', 'Shift', 'Alt'].includes(keyValue)) {
            return;
        };

        //handling parenthesis
        if (keyValue === '(' || keyValue === ')') {
            basicOperation(keyValue);
            return;

        }

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
        const command = keyMap[keyValue] || keyValue;

        const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', 'Clear'];

        //Checking if user key is on the list
        if (keysAllowed.includes(command)) {
            basicOperation(command);
        }
        else {
            display.textContent = "Wrong Key";
        }
    });
}

calculator();
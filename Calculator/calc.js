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
        
        let keyValue = e.key;
        
        const keyMap = {
            'Enter': '=',
            'Backspace': 'AC',
            'Escape': 'AC',
            'Shift+8': '*',
            'Shift+=': '+'
        };


        //preventing invalid keys
        if(e.shiftKey && keyValue === '8'){
            keyValue = 'Shift+8';
        }

        if(e.shiftKey && keyValue === '+'){
            keyValue = 'Shift+=';
        }

        //handling special keys
        if(keyMap.hasOwnProperty(keyValue)){
            const command = keyMap[keyValue];
            basicOperation(command);
            return;
        }
        //handling parenthesis
        else if (keyValue === '(' || keyValue === ')') {
            basicOperation(keyValue);
            return;

        }

        const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '(', ')', '=', 'AC'];

        if(keysAllowed.includes(keyValue)){
            basicOperation(keyValue);
        }

        else if(keyValue === 'Backspace'){
            result = result.slice(0, -1);
            display.value = result;
        }
        else{
            result = "Wrong Input"; 
        }
    });
}

calculator();
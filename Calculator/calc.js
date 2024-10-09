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
    //checking if the clicked element is a button
    if (value === '=') {
        result = eval(result.trim());
    }
    else if (value === "AC") {
        result = '';
    }
    else if (value === "+/-") {
        if (result.startsWith("-")) {
            //remove negative sign if it's there 
            result = result.substring(1);
        }
        //adding negative
        else if (result !== "" && result != "0") {
            result = "-" + result;
        }
    }
    else if (value === '%') {
        result = (parseFloat(result) / 100).toString(); //toString to avoid confusing calculation with concatenation 
    }

    else {
        scientificOperation(value, result);
        result += value;
    }
    display.value = result;
    cursorDisplay();
}

//function to handle scientific operations 

//in progress
function scientificOperation(value) {

    let numResult = parseFloat(value);

    //testing value
    if(isNaN(numResult)){
        return "error";
    }
    switch (value) {
        case 'Rand':
            result = Math.random().toFixed(8);
            break
        case 'sinh':
            result = Math.sinh(numResult);
            break;
        default:
            return value;
    }

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
        const modifierKeys = ['Control', 'Shift', 'Alt'];

        if (modifierKeys.includes(keyValue)) {
            return;
        }

        //Since enter and = are identical and Escape and Clear are identical, store them in different variables and chose them randomly
        const keyMap = {
            'Enter': '=',
            'Backspace': 'AC',
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
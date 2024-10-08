const display = document.querySelector('.display');
let result = "";

function calculator() {

    //Using eventlistener to update when button is clicked
    document.querySelector('.calculator').addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            const buttonValue = e.target.textContent;
            handleInput(buttonValue);
        }

    });
    //Initializing keyboard listening 
    keyboardListener();
}


function handleInput(value) {
    //checking if the clicked element is a button
    if (value === '=') {
        try {
            //checking for sinh
            if (result.includes("sinh(")) {
                let insideValue = result.match(/sinh\(([^)]+)\)/)[1];
                //getting value as a num since exp requires a num instead of string
                let x = parseFloat(insideValue);
                result = (Math.exp(x) - Math.exp(-x)) / 2;
            }else{

            result = eval(result.trim());
        }
        }
        catch (e) {
            result = 'Wrong input'
        }
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
        result /= 100;
    }

    //generate random num from 0 - 1 using rand with 8 decimal places
    else if (value === 'Rand') {
        result = Math.random().toFixed(8);
    }
    else if (value === 'sinh') {
       if(!result.includes('sinh(')){
        result+="sinh()";
       }

    }
    else {
        result += value;
    }
    display.value = result;
    cursorDisplay();
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
            handleInput('=');
            return;
        }
        else if (e.ctrlKey && keyValue === '8') {
            handleInput('*');
            return;
        }

        //Choose identical keys randomly 
        const value = keyMap[keyValue] || keyValue;

        const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', 'Enter', 'Escape', 'Clear'];

        //Checking if user key is on the list
        if (keysAllowed.includes(keyValue) || keyValue in keyMap) {
            handleInput(value);
        }
        else {
            display.textContent = "Wrong Key";
        }
    });
}

calculator();
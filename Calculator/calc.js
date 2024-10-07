const display = document.querySelector('.display');
let result = "";

function calculator() {

    //Using eventlistener to update when button is clicked
    document.querySelector('.buttons').addEventListener('click', function (e) {
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
            result = eval(result.trim());
        }
        catch (e) {
            result = 'Wrong input'
        }
    }
    else if (value === "Clear") {
        result = '';
    }
    else {
        result += value;
    }
    display.textContent = result;
    cursorDisplay();
}


function cursorDisplay(){
    if(display.textContent.endsWith('|')){
        display.textContent = display.textContent.slice(0, -1); //removes couser
    }
    else{
        display.textContent +='|';
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
            'Backspace': 'Clear',
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
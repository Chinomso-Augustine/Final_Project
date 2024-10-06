
//Waiting for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    let result = " ";


    document.querySelector('.buttons').addEventListener('click', function (e) {

        //checking if the clicked element is a button
        if (e.target.tagName === 'BUTTON') {
            const value = e.target.textContent;
            if (value === '=') {
                try {
                    result = eval(result);
                }
                catch (e) {
                    result = 'Wrong input'
                }
            }
            else if (value === "Clear") {
                result = ' ';
            }
            else {
                result += value;
            }
            display.textContent = result;
        }
        
    })
})
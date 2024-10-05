
function playGame(){
    const num = document.querySelector('.inputBar').value;
    const displayBar = document.querySelector('.display');
    displayBar.innerHTML = " ";

    //checking error 
    if(isNaN(num) || num < 1){
        displayBar.innerHTML = "Enter a number greater than 0";
        return;
    }

    for(let i =1; i <= num; i++){
        let result = " ";

        if(i % 5 === 0 && i % 3=== 0){
            result = "FizzBuzz";
        }
        else if(i % 5 == 0){
            result = "Buzz";
        }
        else if(i % 3 == 0){
            result = "Fizz";
        }
        else{
            result = i.toString();
        }
        displayBar.innerHTML +=result + "<br>";

    }
}
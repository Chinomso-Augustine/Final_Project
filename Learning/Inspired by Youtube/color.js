
const body = document.getElementsByTagName("body")[0];  //Accessing first elements in the body

//Creating function to change colors when clicked
function setColor(name){
    body.style.backgroundColor = name; // Accessing name of color to set the background color
}

//Function for random color RGB color
function randColor(){
    const red = Math.round(Math.random()*255); //Getting random from 0 to 1 and multiplying by 255 to get random from 0 - 255 rounded up
    const green = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);

    const color = `rgb(${red}, ${green}, ${blue})` //creating colors that will be used to change the background
    body.style.backgroundColor = color;

}
/* Skills Learned
    1: Accessing html body; 
        a: using ...("body")[0] access first element in the HTML which is body
    2: Setting random background color
        a: set variables that will store the range of random numbers need
        b: Set variable that will store all the random number generated
        c: Use backtick follow by the color name which is rgb and store the random colors in a ( ) with $[]
        d: use body.style.backgroundColor = color to get random color
*/
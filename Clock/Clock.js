
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let amPmDisplay = document.querySelector('.amPm');

function getTime() {
    let currentTime = new Date();

    //Getting time
    let hr = currentTime.getHours();
    let mn = currentTime.getMinutes();
    let se = currentTime.getSeconds();

    //Checking for AM and PM
    let isAm = hr < 12 || hr === 0;
    let amPm = isAm? amPmDisplay.innerHTML = "AM":amPmDisplay.innerHTML = "PM";

    //converting to 12hr format 
    hr = hr % 12 || 12; 

    //displaying time in two digits
    hours.textContent = String(hr).padStart(2, "0");
    minutes.textContent = String(mn).padStart(2, "0");
    seconds.textContent = String(se).padStart(2, "0");
    amPmDisplay.textContent = amPm; 
}

setInterval(getTime, 1000);
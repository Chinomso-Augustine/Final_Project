
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

    //Converting to 12 hr time and setting AM and PM 
    //for midnight
    if (hr == 0) {
        hr = 12;
        amPmDisplay.textContent = "AM";
    }
    //for noon
    else if (hr === 12) {
        amPmDisplay.textContent = "PM";
    }
    //for afternoon 
    else if (hr > 12) {
        hr = hr - 12;
        amPmDisplay.textContent = 'PM';
    }
    //for midnight before noon 
    else {
        amPmDisplay.textContent = 'AM';
    }
    displayTime(hr, mn, se);
}

function displayTime(hr, mn, se) {
    hours.textContent = hr;
    minutes.textContent = mn;
    seconds.textContent = se;
}

setInterval(getTime, 1000);
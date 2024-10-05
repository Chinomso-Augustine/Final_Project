 

const weatherApiKey = "5be6c668b0d0c7db49a92ea84f9b33f4";
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
    const response = await fetch(weatherApiUrl + `&appid=${weatherApiKey}`);
    let data = await response.json();

    console.log(data);
}

checkWeather();



/*
function getTimeZone() {
    const location = document.querySelectorAll('.locationName').values; //storing value of location;

    //Getting google Geocoding API
    const timeApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=YOUR_GEOCODING_API_KEY`;


    fetch(timeApiUrl)
        //converting response to json
        .then(response => response.json())
        .then(data => {

            //checking if API is error free
            if (!data.status === 'OK') {

                //extracting latitude and longitude from the response
                const lat = data.results[0].geometry.location.lat;
                const lng = data.results[0].geometry.location.lng;


                return fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${Math.floor(Date.now() / 1000)}&key=YOUR_TIMEZONE_API_KEY`);
            }
            else {
                //display error if map is not successful
                throw new error('Geocoding failed: ' + data.status);

            }
        })

        //converting timezone api to json
        .then(response => response.json())
        .then(data => {
            if (data.status === 'OK') {
                document.getElementsByClassName('.display').textContent = `time zone for ${location} is ${data.timeZoneId}`;
            }
        })

        .catch(error => {
            console.error('Failed: ', error);
            document.getElementsByClassName('.display').textContent = error.message;
        })

}
        */
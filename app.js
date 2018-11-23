// init storage
const storage = new Storage();

// get stores location data
const weatherLocation = storage.getLocationData();

// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// init ui
const ui = new UI();

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// change location
// weather.changeLocation('Miami', 'FL');
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // change location
    weather.changeLocation(city, state);

    // set location in ls
    storage.setLocationData(city, state);

    // get and display weather
    getWeather();

    // close modal
    $('#locModal').modal('hide');
});

function getWeather() {

    weather.getWeather().then(results => {
        
        // console.log(results.weather[0].description);
        ui.paint(results);
    })
    .catch(err => console.log(err));

}

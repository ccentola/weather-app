/* 
Uses weather data from openweathermap. Need to convert "City, State" to city id.
*/

class Weather {
    constructor(city, state) {
        this.apiKey = 'd2377ec310dc31ec8896f1ad783c6d6f';
        this.city = city;
        this.state = state;
        this.units = 'imperial';
    }

    // fetch weather from api
    async getWeather() {

        // make call
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=${this.units}`);

        // response to json
        const responseData = await response.json();

        return responseData;
    }

    // change location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}
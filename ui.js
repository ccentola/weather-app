class UI {
    constructor() {

        this.location = document.getElementById('w-location'); //y
        this.desc = document.getElementById('w-desc'); // weather.description
        this.string = document.getElementById('w-string'); // na
        this.details = document.getElementById('w-details'); // na
        // this.icon = document.getElementById('w-icon'); // weather.icon - text only
        this.humidity = document.getElementById('w-humidity'); // main.humidity
        // this.feelsLike = document.getElementById('w-feels-like'); // na
        // this.dewpoint = document.getElementById('w-dewpoint'); // na
        this.wind = document.getElementById('w-wind'); // wind.speed
        this.minMax = document.getElementById('w-min-max');

    }

    // paint UI with results
    paint(weather) {

        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} | Direction: ${weather.wind.deg }`
        this.minMax.textContent = `Min: ${weather.main.temp_min} | Max: ${weather.main.temp_max}`

        // this.location.textContent = weather.name;
        // // this.icon.setAttribute('src',weather.icon_url); -- net to search based on code
        // this.icon.textContent = weather.weather[0].icon;
        
    }

    // convert wind deg to direction
    // windDirection() {
    //     let val = Math.floor((this.weather.wind.deg / 22.5) + .5);
    //     let arr = ['N','NNE','NE','ENE','E','ESE', 'SE', 'SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'];

    //     return arr[(val % 16)];
    // }
};
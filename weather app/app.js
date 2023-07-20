const notifyEl = document.querySelector(".notification");
const iconEl = document.querySelector(".weather-icon");
const tempEl = document.querySelector(".temperature-value p");
const descEl = document.querySelector(".temperature-description p");
const locEl = document.querySelector(".location p");


// App Data
const weather = {};

weather.temperature = {
    unit: "celcius"
}

// Set user position 
const setPosition = (position) => {
    let longitude = position.coords.lon;
    let lattitude = position.coords.lat;

    getWeather(lattitude, longitude);
}

// Eroor with geolocation
const showError = (error) => {
    notifyEl.style.display = 'block';
    notifyEl.innerHTML = `<p>${error.message}</p>`;
}

//API call
const KELVIN =273;

const key = "73caa9885eb64447530888cc898cfed2";

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
    
}else{
    notifyEl.style.display = "block";
    notifyEl.innerHTML = `<p>Browser doesn't Support Geolocation</p>`;

}

// Get weather from API 
const getWeather = (lattitude,longitude) => {
    let api=`https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=${key}`;

    fetch(api).then( (response) => {
        let data = response.json();
        return data;

    }).then( (data) => {
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;


    }).then( () => {
        displayWeather();
    })
};

// // displaying weather
const displayWeather = () => {
    iconEl.innerHTML = `<img src="icons/${weather.iconId}.png"/>`; 
    tempEl.innerHTML = `${weather.temperature.value} \u00B0 <span>C</span>`;
    descEl.innerHTML = weather.description;
    locEl.innerHTML = `${weather.city}, ${weather.country}`;
}

//C to F 
const celciusToFahrenheit = (temperature) => {
    return ((temperature * 9/5)+32);
}

// Conversion
tempEl.addEventListener("click", () => {
    
    if(weather.temperature.value === undefined) return;

    if(weather.temperature.unit === "celsius"){
        let fahrenheit = celciusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        tempEl.innerHTML = `${fahrenheit}\u00B0 <span>F</span>`;
        weather.temperature.unit = "fahrenheit";

    }
    else{
        tempEl.innerHTML = `${weather.temperature.value}\u00B0 <span>C</span>`;
        weather.temperature.unit = "celsius";
    }
})

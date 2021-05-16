const api = {
    key: "926f9848e786e2fa78d6c0f226ee3e47",
    base:"https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13 ) {
        getWeatherData(searchbox.value);
    }
}

function getWeatherData(cityName) {
    fetch (`${api.base}weather?q=${cityName}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherResults);
    
}

function showWeatherResults(weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let currentTime = new Date();
    let date = document.querySelector('.location .date');    
    date.innerText = generateDate(currentTime);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
 
    let currentWeather = document.querySelector('.current .weather');
    currentWeather.innertext = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.inner = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function generateDate(timeAndDate) {
    let months= ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday",
    "Saturday"];

    let day = days[timeAndDate.getDay()];
    let date = timeAndDate.getDate();
    let month = months[timeAndDate.getMonth()];
    let year = timeAndDate.getFullYear();

    return `${day} ${date} ${month} ${year}`
}
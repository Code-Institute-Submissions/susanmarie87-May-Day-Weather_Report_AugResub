let unitsGlobal = 0;

function showWeatherResults(weather) {

    const locationCityRef = (document.querySelector('.location .city').innerText = `${weather.name}, ${weather.sys.country}`);

    const currentTime = new Date();
    let dateRef = document.querySelector('.location .date');
    dateRef.innerText = generateDate(currentTime);

    const tempRef = document.querySelector('.current .temp');

    if (unitsGlobal == 0) {
        tempRef.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
    } else {
        tempRef.innerHTML = `${Math.round((weather.main.temp * 9 / 5) + 32)}<span>°f</span>`;
    }

    const currentWeatherRef = document.querySelector('.current .weather');
    currentWeatherRef.innerHTML = weather.weather[0].main;

    const hilowRef = document.querySelector('.hi-low');

    if (unitsGlobal == 0) {
        hilowRef.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
    } else {
        hilowRef.innerHTML = `${Math.round((weather.main.temp_min * 9 / 5) + 32)}°f / ${Math.round((weather.main.temp_max * 9 / 5) + 32)}°f`;
    }
}
}
const api = {
    key: "489bd97205f531f6264564502c3c7903",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);
searchbox.addEventListener('blur', setQuery);


function setQuery(evt) {
    if (evt.keyCode == 13) || (evt.type == "blur") {

        getWeatherData(searchbox.value);
    }
}

function getWeatherData(cityName) {
    fetch(`${api.base}weather?q=${cityName}&units=metric&APPID=${api.key}`)
        .then(
            (response) => {
                if (!response.ok) {
                    throw new Error("Location unknown. Please try again.");
                }
                return response.json();
            }
        )
        .catch(error => {
            console.log(error);
            alert("location Unknown. Please try again.");
        })
        .then(showWeatherResults

        );
}
const radioCelsius = document.getElementById('celsius');
radioCelsius.addEventListener('click', setCelsius);


function setCelsius(evt) {
    unitsGlobal = 0;
    getWeatherData(searchbox.value);

}

const radioFarenheit = document.getElementById('farenheit');
radioFarenheit.addEventListener('click', setFarenheit);


function setFarenheit(evt) {
    unitsGlobal = 1;
    getWeatherData(searchbox.value);
}



function generateDate(timeAndDate) {
    let months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
        "Saturday"
    ];

    let day = days[timeAndDate.getDay()];
    let date = timeAndDate.getDate();
    let month = months[timeAndDate.getMonth()];
    let year = timeAndDate.getFullYear();

    return `${day} ${date} ${month} ${year}`
}
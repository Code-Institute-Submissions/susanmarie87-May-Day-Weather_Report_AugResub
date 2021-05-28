function showWeatherResults(weather) {

    const locationCityRef = (document.querySelector('.location .city').innerText = `${weather.name}, ${weather.sys.country}`);

    const currentTime = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = generateDate(currentTime);

    const temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    const currentWeather = document.querySelector('.current .weather');
    currentWeather.innerHTML = weather.weather[0].main;

    const hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}
const api = {
    key: "489bd97205f531f6264564502c3c7903",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);


function setQuery(evt) {
    if (evt.keyCode == 13) {
        getWeatherData(searchbox.value);
    }
}

function getWeatherData(cityName) {
    fetch(`${api.base}weather?q=${cityName}&units=metric&APPID=${api.key}`)
        .then(
            (response) => {
                if (!response.ok) {
                    throw new Error("Location unknown. PLease try again.");
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
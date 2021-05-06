const api = {
    key: "3868ebac95625426ec49b0031e0e6a5c",
    base:"https://home.openweathermap.org/"
}

const searchbox = document.querySelector('search-box');
searchbox.addEventListener('keypress', setQuery);

function set(evt) {
    if (evt.keyCode == 13 ) {
        getResults(searchbox.value);
    }
}

function getResults (query) {
    fetch (`${api.base}weather?q=${query}&units=imperial&APPID=${apikey}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather){
    console.log(weather);
    let city = document.querySelector
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');    
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
}

function dateBuilder (d) {
    let months= ["January", "February", "March", "April", "May", "June", "July"
    "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday"
    "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}
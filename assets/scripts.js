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
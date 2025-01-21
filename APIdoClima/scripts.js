const apiKey = "80fc29cee6988a97342ea23a59e5696a";
const apiCountryUrl = "https://flagsapi.com/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");
const mapContainer = document.querySelector("#map");

let map; 
let marker; 

weatherContainer.style.display = "none";
mapContainer.style.display = "none";

const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
};

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    const countryCode = data.sys.country; 
    const lat = data.coord.lat;
    const lon = data.coord.lon; 
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", `${apiCountryUrl}${countryCode}/flat/64.png`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

    weatherContainer.style.display = "block";
    mapContainer.style.display = "block";

    showMap(lat, lon);
};

const showMap = (lat, lon) => {
    if (map) {
        map.remove();
    }

    map = L.map('map').setView([lat, lon], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    if (marker) {
        marker.remove();
    }

    marker = L.marker([lat, lon]).addTo(map)
        .bindPopup(`Cidade: ${cityElement.innerText}`)
        .openPopup();
};

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;
    if (city) {
        showWeatherData(city);
    }
});

cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const city = e.target.value;
        if (city) {
            showWeatherData(city);
        }
    }
});

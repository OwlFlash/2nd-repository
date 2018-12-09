let weather = 'sun';

function rain() {
    document.getElementsByTagName("H3")[0].setAttribute("class", "rain");
}

function snow() {
    document.getElementsByTagName("H3")[0].setAttribute("class", "snow");
}

function sun() {
    document.getElementsByTagName("H3")[0].setAttribute("class", "sun");
}

if(weather == "rain") {
    rain();
} else if(weather == "sun") {
    sun();
} else if(weather == "snow") {
    snow();
} 

// Obsluga ikonki help
const icon_help = document.getElementById('help-icon');
icon_help.addEventListener('click', () => {
document.querySelector(".header-help-text").classList.toggle("show-header-help-text");
    
});

// Obiekt trzymajacy koordynaty
const userCoordinates = {
    latitude: 0,
    longitude: 0
};

// Sciaganie geolokacji

function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
};

function showPosition(position) {
    userCoordinates.latitude = position.coords.latitude;
    userCoordinates.longitude = position.coords.longitude
}
// Obiekt trzymajacy source icon
const weatherIcon = {
    sun: "public/weather-icons/sunny.png",
    rain: "public/weather-icons/rain.png",
    snow: "public/weather-icons/snow.png",
    storm: "public/weather-icons/thunder.png",
    clouds_sun: "public/weather-icons/clouds-and-sun.png",
    clouds: "public/weather-icons/clouds.png"
}
// Odnosniki do dni
const icon_days = {
  one: document.getElementById("day-1"),
  two: document.getElementById("day-2"),
  three: document.getElementById("day-3"),
  four: document.getElementById("day-4"),
  five: document.getElementById("day-5")
};

// Funkcja zwracajaca source pogody na podstawie odpowiedzi API
function chooseWeather(weatherID) {
    switch(true) {
        case (weatherID <= 232):
        return weatherIcon.storm; 
        break;
        case (weatherID <= 531 && weatherID > 232):
        return weatherIcon.rain;
        break;
        case (weatherID <= 622 && weatherID > 531):
        return weatherIcon.snow;
        break;
        case (weatherID == 800 ):
        return weatherIcon.sun
        break;
        case (weatherID <= 804 && weatherID > 801):
        return weatherIcon.clouds;
        break;
        case (weatherID == 801):
        return weatherIcon.clouds_sun;
        break;

    }
}

// Funkcja zmieniajaca icony 
function showIcons() {
    // Tu trzba zmienic argument chooseWeather na te zgodne z odpowiedzia API
    // Funkcje wrzucilem w body onload    
    icon_days.one.innerHTML=`<img src="${chooseWeather(800)}" />`
    icon_days.two.innerHTML = `<img src="${chooseWeather(800)}" />`;
    icon_days.three.innerHTML = `<img src="${chooseWeather(800)}" />`;
    icon_days.four.innerHTML = `<img src="${chooseWeather(800)}" />`;
    icon_days.five.innerHTML = `<img src="${chooseWeather(800)}" />`;

}
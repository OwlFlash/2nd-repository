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

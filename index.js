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
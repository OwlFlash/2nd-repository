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
    userCoordinates.longitude = position.coords.longitude;
    console.log(userCoordinates.latitude);
    console.log(userCoordinates.longitude);

    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+userCoordinates.latitude+'&lon='+userCoordinates.longitude+'139&appid=558f7f27fa8c91374fcf614b78a0c35f')
    .then((res) => res.json())
    .then((data)=>{
        console.log(data);
        console.log(data.weather[0].main)
        var currentWeather = data.weather[0].main;

        function rain() {
            document.getElementsByTagName("H3")[0].setAttribute("class", "rain");
        }
        function snow() {
            document.getElementsByTagName("H3")[0].setAttribute("class", "snow");
        }
        function sun() {
            document.getElementsByTagName("H3")[0].setAttribute("class", "sun");
        }
        if (currentWeather == "Rain") {
            rain();
        } else if (currentWeather == "Sun") {
            sun();
        } else if (currentWeather == "Snow") {
            snow();
        } else {
            rain();
        }
    })
        
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+userCoordinates.latitude+'&lon='+userCoordinates.longitude+'&appid=558f7f27fa8c91374fcf614b78a0c35f')
    .then((res) => res.json())
    .then((data)=>{
        var daydate = data.list[4].dt_txt.slice(0,11);
        var dayname=document.getElementById('day-one').innerHTML=daydate;
        var wind =data.list[4].wind.speed+" m/s";
        var windHT=document.getElementById("wind-one").innerHTML=wind;
        var humidity =data.list[4].main.humidity+" %";
        var humidityHT=document.getElementById("humidity-one").innerHTML=humidity;
        var pressure=data.list[4].main.pressure+" hPa";
        var pressureHT=document.getElementById("pressure-one").innerHTML=pressure;
        var descriprion =data.list[4].weather[0].main;
        var descriptionHT=document.getElementById("description-one").innerHTML=descriprion;
        var celsiusDecimal =data.list[4].main.temp-272.15 ;
        var celsius =Math.round(celsiusDecimal)+" °C";
        var celsiusHT=document.getElementById("celsius-one").innerHTML=celsius;
        var fahrenheitDecimal =data.list[4].main.temp;
        var fahrenheit =Math.round(fahrenheitDecimal*(9/5)-459.67)+" °F";
        var fahrenheitHT=document.getElementById("fahrenheit-one").innerHTML=fahrenheit;

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
        
        daydate = data.list[12].dt_txt.slice(0,11);
        dayname=document.getElementById('day-two').innerHTML=daydate;
        wind =data.list[12].wind.speed+" m/s";
        windHT=document.getElementById("wind-two").innerHTML=wind;
        humidity =data.list[12].main.humidity+" %";
        humidityHT=document.getElementById("humidity-two").innerHTML=humidity;
        pressure=data.list[12].main.pressure+" hPa";
        pressureHT=document.getElementById("pressure-two").innerHTML=pressure;
        descriprion =data.list[12].weather[0].main;
        descriptionHT=document.getElementById("description-two").innerHTML=descriprion;
        celsiusDecimal =data.list[12].main.temp-272.15 ;
        celsius =Math.round(celsiusDecimal)+" °C";
        celsiusHT=document.getElementById("celsius-two").innerHTML=celsius;
        fahrenheitDecimal =data.list[12].main.temp;
        fahrenheit =Math.round(fahrenheitDecimal*(9/5)-459.67)+" °F";
        fahrenheitHT=document.getElementById("fahrenheit-two").innerHTML=fahrenheit;

        daydate = data.list[20].dt_txt.slice(0,11);  
        dayname=document.getElementById('day-three').innerHTML=daydate;
        wind =data.list[20].wind.speed+" m/s";
        windHT=document.getElementById("wind-three").innerHTML=wind;
        humidity =data.list[20].main.humidity+" %";
        humidityHT=document.getElementById("humidity-three").innerHTML=humidity;
        pressure=data.list[20].main.pressure+" hPa";
        pressureHT=document.getElementById("pressure-three").innerHTML=pressure;
        descriprion =data.list[20].weather[0].main;
        descriptionHT=document.getElementById("description-three").innerHTML=descriprion;
        celsiusDecimal =data.list[20].main.temp-272.15 ;
        celsius =Math.round(celsiusDecimal)+" °C";
        celsiusHT=document.getElementById("celsius-three").innerHTML=celsius;
        fahrenheitDecimal =data.list[20].main.temp;
        fahrenheit =Math.round(fahrenheitDecimal*(9/5)-459.67)+" °F";
        fahrenheitHT=document.getElementById("fahrenheit-three").innerHTML=fahrenheit;

        daydate = data.list[28].dt_txt.slice(0,11);
        dayname=document.getElementById('day-four').innerHTML=daydate;
        wind =data.list[28].wind.speed+" m/s";
        windHT=document.getElementById("wind-four").innerHTML=wind;
        humidity =data.list[28].main.humidity+" %";
        humidityHT=document.getElementById("humidity-four").innerHTML=humidity;
        pressure=data.list[28].main.pressure+" hPa";
        pressureHT=document.getElementById("pressure-four").innerHTML=pressure;
        descriprion =data.list[28].weather[0].main;
        descriptionHT=document.getElementById("description-four").innerHTML=descriprion;
        celsiusDecimal =data.list[28].main.temp-272.15 ;
        celsius =Math.round(celsiusDecimal)+" °C";
        celsiusHT=document.getElementById("celsius-four").innerHTML=celsius;
        fahrenheitDecimal =data.list[28].main.temp;
        fahrenheit =Math.round(fahrenheitDecimal*(9/5)-459.67)+" °F";
        fahrenheitHT=document.getElementById("fahrenheit-four").innerHTML=fahrenheit;

        daydate = data.list[36].dt_txt.slice(0,11);
        dayname=document.getElementById('day-five').innerHTML=daydate;
        wind=data.list[36].wind.speed+" m/s";
        windHT=document.getElementById("wind-five").innerHTML=wind;
        humidity =data.list[36].main.humidity+" %";
        humidityHT=document.getElementById("humidity-five").innerHTML=humidity;
        pressure=data.list[36].main.pressure+" hPa";
        pressureHT=document.getElementById("pressure-five").innerHTML=pressure;
        descriprion =data.list[36].weather[0].main;
        descriptionHT=document.getElementById("description-five").innerHTML=descriprion;
        celsiusDecimal =data.list[36].main.temp-272.15 ;
        celsius =Math.round(celsiusDecimal)+" °C";
        celsiusHT=document.getElementById("celsius-five").innerHTML=celsius;
        fahrenheitDecimal =data.list[36].main.temp;
        fahrenheit =Math.round(fahrenheitDecimal*(9/5)-459.67)+" °F";
        //Waldemar Wojtas part
        fahrenheitHT=document.getElementById("fahrenheit-five").innerHTML=fahrenheit;
        document.getElementById("todaytemp").innerHTML = Math.round(data.list[0].main.temp - 272.15) + " °C";
        document.getElementById("winddeg").innerHTML = Math.round(data.list[0].wind.deg);
        document.getElementById("windscale").innerHTML = Math.round(data.list[0].wind.speed);
        document.getElementById("raindrops").innerHTML = Math.round(data.list[0].main.pressure);
        document.getElementById('todaydate').innerHTML = data.list[0].dt_txt.slice(0, 11);

        // Funkcja zwracajaca source pogody na podstawie odpowiedzi ID pogody
        function chooseWeather(weatherID) {
            switch (true) {
                case (weatherID <= 232):
                    return weatherIcon.storm;
                    break;
                case (weatherID <= 531 && weatherID > 232):
                    return weatherIcon.rain;
                    break;
                case (weatherID <= 622 && weatherID > 531):
                    return weatherIcon.snow;
                    break;
                case (weatherID == 800):
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
            icon_days.one.innerHTML = `<img src="${chooseWeather(data.list[4].weather[0].id)}" />`;
            icon_days.two.innerHTML = `<img src="${chooseWeather(data.list[12].weather[0].id)}" />`;
            icon_days.three.innerHTML = `<img src="${chooseWeather(data.list[20].weather[0].id)}" />`;
            icon_days.four.innerHTML = `<img src="${chooseWeather(data.list[28].weather[0].id)}" />`;
            icon_days.five.innerHTML = `<img src="${chooseWeather(data.list[36].weather[0].id)}" />`;

        }
        // Wywolanie funkcji
        showIcons();
    })
}
function getDayOfTheWeek() {
    let date = new Date();
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return weekday[date.getDay()];
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("weekday").innerHTML = getDayOfTheWeek();
},false);






    




/* ßßßßßßß */

let weather = {
  "paris": {
    temp: 19.7,
    humidity: 80
  },
  "tokyo": {
    temp: 17.3,
    humidity: 50
  },
  "lisbon": {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  "moscow": {
    temp: -5,
    humidity: 20
  }
};


let city = prompt ("Enter the city?");
city = city.toLowerCase();

if (weather[city] !== undefined){

let temperature = weather[city].temp;
let humidity = weather[city].humidity;
let celsiusTemp=Math.round(temperature);
let fahrenheitTemp=Math.round((temperature * 9)/5 + 32 );

alert (`Ìt is currently ${celsiusTemp}°C( ${fahrenheitTemp}°F) in ${city} with a humidity of ${humidity}%`);
}
else{
  alert(`Sorry, we dont know the weather for this city,try to check here https://www.google.com/search?q=weather+${city}`);
}
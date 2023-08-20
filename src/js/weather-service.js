export default class WeatherService {  
    static getWeather(city) {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        const API_KEY_2 = process.env.API_KEY_2;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_2}`;
        request.addEventListener("loadend", function() {
          const response = JSON.parse(this.responseText);
          if (this.status === 200) {
            resolve([response, city]);
          } else {
            reject([this, response, city]);
          }
        });
        request.open("GET", url, true);
        request.send();
      });
    }
  }
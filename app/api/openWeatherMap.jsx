var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=94a76a568e18f598610615cd09eff71b&units=metric';
// units=imperial (For Fahreinheit) & units=metric (For Celsius)
//94a76a568e18f598610615cd09eff71b

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    // ES6 feature : Template String `${}` - To build url - Everything is executed as regular javascript
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    // axios.get() takes url , goes off & fetches it & brings back response
    return axios.get(requestUrl).then(function (res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}

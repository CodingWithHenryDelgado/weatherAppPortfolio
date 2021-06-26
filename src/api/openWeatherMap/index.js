import {config} from '../../config'

const weatherAPI = config.weather_Key;
const API_SITE =  `https://api.openweathermap.org/data/2.5/weather?zip=`;

export const getWeather = async (zipcode) => {
  const response = await fetch(`${API_SITE}${zipcode}${weatherAPI}&units=imperial`);
  const json = await response.json();

  return {
    weatherMetadata: json.weather[0],
    temperature: json.main.temp
  };
};

const openWeatherMapApi = {
  getWeather
};

export default openWeatherMapApi;

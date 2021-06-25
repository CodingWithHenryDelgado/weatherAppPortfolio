const API_SITE =  `https://api.openweathermap.org/data/2.5/weather?q=`;

export const getWeather = async (city, state) => {
  const response = await fetch(`${API_SITE}${city},${state}${weatherAPI}&units=imperial`);
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

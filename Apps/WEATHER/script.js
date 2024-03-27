/**
 * Weather App
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 */
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  });
};

/**
 * Retrieve city input and get the weather data
 */
const searchCity = () => {
  const city = document.getElementById("city-input").value;
  getWeatherData(city)
    .then((res) => {
      showWeatherData(res);
    })
    .catch((error) => {
      console.log(error);
      console.log("Something happened");
    });
};

/**
 * Show the weather data in HTML
 */
const showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;

  // Convert temperatures to Celsius
  const tempCelsius = ((weatherData.main.temp - 32) * 5) / 9;
  const minTempCelsius = ((weatherData.main.temp_min - 32) * 5) / 9;
  const maxTempCelsius = ((weatherData.main.temp_max - 32) * 5) / 9;

  // Display temperatures in Celsius
  document.getElementById("temp").innerText = tempCelsius.toFixed(2) + "°C";
  document.getElementById("min-temp").innerText = minTempCelsius.toFixed(2) + "°C";
  document.getElementById("max-temp").innerText = maxTempCelsius.toFixed(2) + "°C";
};


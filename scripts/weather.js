let is_loading = false;
let error_message = "";
let weather_data = null;

const output_element = document.getElementById("weather-output");

function renderWeather() {
  if (!output_element) {
    return;
  }

  if (is_loading) {
    output_element.className = "weather-output weather-loading";
    output_element.textContent = "Loading...";
    return;
  }

  if (error_message) {
    output_element.className = "weather-output weather-error";
    output_element.textContent = error_message;
    return;
  }

  const current_period = weather_data?.properties?.periods?.[0];

  if (current_period) {
    output_element.className = "weather-output weather-success";
    output_element.innerHTML = `
      <p class="weather-temperature">${current_period.temperature}&deg;${current_period.temperatureUnit}</p>
      <p class="weather-forecast">${current_period.shortForecast}</p>
    `;
    return;
  }

  output_element.className = "weather-output weather-empty";
  output_element.textContent = "Weather data not available.";
}

async function getWeatherData() {
  is_loading = true;
  error_message = "";
  weather_data = null;
  renderWeather();

  try {
    const response = await fetch(
      "https://api.weather.gov/gridpoints/MSO/105,131/forecast"
    );

    if (!response.ok) {
      throw new Error(
        `Weather request failed: ${response.status} ${response.statusText}`
      );
    }

    weather_data = await response.json();
    renderWeather();
  } catch (error) {
    error_message =
      error instanceof Error
        ? error.message
        : "Unable to load weather data. Please try again later.";
    renderWeather();
  } finally {
    is_loading = false;
    renderWeather();
  }
}

renderWeather();
getWeatherData();
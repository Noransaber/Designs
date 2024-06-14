const input = document.getElementsByClassName('inputValue')[0];
const searchBtn = document.getElementsByClassName('button')[0];
const tempHolder = document.getElementsByClassName('temp')[0];
const descHolder = document.getElementsByClassName('desc')[0];
const DataFoundHolder = document.getElementsByClassName('data-found')[0];
const apiKey = 'c4718b0a8062a6fc5eaf1ff2406eb109';

// ------------------------------- Calling the APi --------------------------
async function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
// ------------------------------- Handle display the data --------------------------
function DisplayData(weather) {
  tempHolder.textContent = `${weather.main.temp}°C`;
  descHolder.textContent = weather.weather[0].description;
}
// ------------------------------- Verify on the city name --------------------------
async function handleSearch() {
  const city = input.value.trim();
  const cityRegex = /^[a-zA-Z\s]+$/;

  if (!city) {
    alert('Please enter a city name');
  } else if (!cityRegex.test(city)) {
    alert('Please enter a valid city name containing only letters and spaces');
  } else {
    const data = await fetchWeatherData(city);
    if (data) {
      DisplayData(data);
    } else {
      alert('City not found. Please enter a valid city name.');
    }
  }
}
// ------------------------------- Add even listener on button && key --------------------------
searchBtn.addEventListener('click', handleSearch);

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleSearch();
  }
});

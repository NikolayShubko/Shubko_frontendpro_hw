const API_URL =
  "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";
const weatherInfo = document.querySelector(".weather-holder");
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    renderWeather(data);
  })
  .catch((error) => console.log(error));

const renderWeather = (data) => {
  const weatherDetails = `
   <p class="city">City: ${data.name}</p>
   <p class="temp">Temperature: ${data.main.temp} &#8451;</p>
   <p class="pressure">Wind pressure: ${data.main.pressure}</p>
   <p class="description">Description: ${data.weather[0].description}</p>
   <p class="humidity">Humidity: ${data.main.humidity}%</p>
   <p class="speed">Wind Speed: ${data.wind.speed} meter per second</p>
   <p class="deg">Wind degrees: ${data.wind.deg} &#176;</p>
   <div class="image-holder"><img src="images/10d.png"></div>
   `;
  weatherInfo.innerHTML = weatherDetails;
};

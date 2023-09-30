function getWeather() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value;

    if (location.trim() === '') {
        alert('Please enter a location.');
        return;
    }

    const apiKey = 'bd5e378503939ddaee76f12ad7a97608'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].description}</p>
        <p><i class="fas fa-thermometer-half"></i> Temperature: ${data.main.temp} °C</p>
        <p><i class="fas fa-tint"></i> Humidity: ${data.main.humidity} %</p>
        <p><i class="fas fa-wind"></i> Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

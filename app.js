const apiKey = 'API_KEY';

function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found. Please enter a valid city name.");
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => {
            document.getElementById('weatherInfo').innerText = error.message;
        });
}

function displayWeather(data) {
    const { main, weather, name } = data;
    document.getElementById('weatherInfo').innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Weather: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
    `;
}

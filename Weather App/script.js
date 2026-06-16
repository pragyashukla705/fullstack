let btn = document.querySelector("button");
const API_Key = "abda84136a347c82f1d4173254607878";

btn.addEventListener("click", getweatherdata);

async function getweatherdata() {

    let input = document.querySelector("#search");
    let city = input.value.trim().toLowerCase();

    if (city == "") {
        alert("Please enter a city name");
        return;
    }
    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metrics`
        );

        const data = await response.json();

        if (response.status!==200) {
            document.querySelector("#result").innerHTML =
                `<p class="error">${data.message}</p>`;
            return;
        }

        document.querySelector("#result").innerHTML = `
            <div class="weather-report">
                <h3>
                <span class="material-symbols-outlined">
location_home
</span>
                ${data.name}</h3>
                <p>Temperature: ${data.main.temp-273.15} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            </div>
        `;

    }
     catch (error) {

        console.error(error);

        document.querySelector("#result").innerHTML =
            `<p class="error">An error occurred while fetching weather data.</p>`;
    }
}
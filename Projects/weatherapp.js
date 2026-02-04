document.addEventListener("DOMContentLoaded", () => {

  const APIKEY = "6b9f3ddcba0caf531f38a8a465b58f75";

  const input = document.querySelector(".searchbox");
  const btn = document.querySelector(".searchbtn");

  const tempEl = document.querySelector(".temp");
  const cityEl = document.querySelector(".city");
  const dateEl = document.querySelector(".datetime");
  const iconEl = document.querySelector(".icon");
  const condEl = document.querySelector(".condition");

  function formatDate(d){
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const pad = n => String(n).padStart(2,"0");
    return `${pad(d.getHours())}:${pad(d.getMinutes())} ${days[d.getDay()]} ${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
  }

  async function getWeather(city) {
    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${APIKEY}`;

    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "City not found");
    return data;
  }

  async function search() {
    const city = input.value.trim();
    if (!city) return;

    btn.textContent = "Loading...";
    btn.disabled = true;

    try {
      const data = await getWeather(city);

      tempEl.textContent = `${Math.round(data.main.temp)} °C`;
      cityEl.textContent = data.name;
      dateEl.textContent = formatDate(new Date());
      condEl.textContent = data.weather[0].main;

      const map = {
        Clear: "☀️",
        Clouds: "☁️",
        Rain: "🌧️",
        Thunderstorm: "⛈️",
        Snow: "❄️",
        Mist: "🌫️"
      };

      iconEl.textContent = map[data.weather[0].main] || "🌤️";

    } catch (err) {
      console.error(err);
      condEl.textContent = "City not found / API error";
    } finally {
      btn.textContent = "Search";
      btn.disabled = false;
      input.value = "";

    }
  }

  btn.addEventListener("click", search);
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") search();
  });

});

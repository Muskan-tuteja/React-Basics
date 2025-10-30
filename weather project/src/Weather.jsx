import React, { useState } from "react";
import axios from "axios";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "298cf030bb9e88fc6ab3805f2a9a6f8d"; 

  const fetchWeather = async () => {
    if (!city.trim()) return;

    try {
      setError("");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError("City not found! Try again.");
      setWeather(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sky-300 to-blue-600 text-white">
      <h1 className="text-3xl font-bold mb-6">🌤️ Weather App</h1>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-3 rounded text-black outline-none border-2 border-white focus:border-yellow-400 "
        />
        <button
          onClick={fetchWeather}
          className="bg-yellow-400 px-4 py-2 rounded font-semibold hover:bg-yellow-500"
        >
          Search
        </button>
      </div>

      {error && <p className="mt-4 text-red-200">{error}</p>}

      {weather && (
        <div className="mt-6 bg-white/20 p-5 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold">{weather.name}</h2>
          <p className="text-lg">{weather.weather[0].description}</p>
          <h3 className="text-4xl font-bold">{weather.main.temp}°C</h3>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};



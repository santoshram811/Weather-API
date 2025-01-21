import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = ""; 

  const getWeather = async () => {
    if (!city) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      alert("City not found");
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-500 to-gray-900 min-h-screen flex items-center justify-center">
      <div className="text-white p-6 rounded-xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Weather App</h1>
        <p className="mb-6">Get real-time weather updates</p>
        <div>
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 w-full rounded text-black mb-4"
          />
          <button
            onClick={getWeather}
            className="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded text-white"
          >
            Get Weather
          </button>
        </div>
        {weather && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold">{weather.name}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Condition: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

"use client";

import { useState, useEffect } from "react";

export default function CurrentWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "YOUR_OPENWEATHER_API_KEY"; // Replace with your API key

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Calgary&units=metric&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  if (!weatherData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-0 text-white">
        <h1>Loading Weather Data...</h1>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://wallpaperaccess.com/full/5639686.jpg')",
      }}
    >
      {/* News Ticker Animation */}
      <div className="absolute top-0 w-full bg-yellow- text-black py-2">
   
      </div>

      {/* Main Weather Content */}
      <div className="flex flex-col items-center text-white bg-gray-00 bg-opacity-75 min-h-screen p-6">
        <h1 className="text-4xl font-bold mt-10 mb-6">Calgary</h1>
        <div className="bg-white text-black p-6 rounded-lg shadow-md max-w-md w-full">
          
        </div>
        <a
          href="/"
          className="mt-10 text-yellow-400 underline text-lg hover:text-yellow-300"
        >
          Back to Home
        </a>
      </div>

      
      
    </div>
  );
}

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
      <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
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
      <div className="absolute top-0 w-full bg-yellow-00 text-black py-2">
        <div className="flex overflow-hidden whitespace-nowrap animate-marquee">
          <p className="text-sm font-semibold px-4">
            Breaking News: Current temperature in Calgary is{" "}
            {weatherData?.main?.temp}°C with {weatherData?.weather?.[0]?.description}. 🌨️
          </p>
          <p className="text-sm font-semibold px-4">
            Wind speeds are {weatherData?.wind?.speed} m/s. Stay warm and safe!
          </p>
        </div>
      </div>

      {/* Main Weather Content */}
      <div className="flex flex-col items-center text-white bg-gray-00 bg-opacity-75 min-h-screen p-6">
        <h1 className="text-4xl font-bold mt-10 mb-6">Weather in Calgary</h1>
        <div className="bg-white text-black p-6 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">
            {weatherData?.name}JATT FORECAST PRESENTS {weatherData?.sys?.country}
          </h2>
          <p className="text-lg">
            <strong>Temperature: -20</strong> {weatherData?.main?.temp}°C
          </p>
          <p className="text-lg">
            <strong>Weather: MOSTLY CLOUDY</strong> {weatherData?.weather?.[0]?.description}
          </p>
          <p className="text-lg">
            <strong>Humidity: 17</strong> {weatherData?.main?.humidity}%
          </p>
          <p className="text-lg">
            <strong>Wind Speed: 20</strong> {weatherData?.wind?.speed} m/s
          </p>
        </div>
        <a
          href="/"
          className="mt-10 text-yellow-400 underline text-lg hover:text-yellow-300"
        >
          Back to Home
        </a>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

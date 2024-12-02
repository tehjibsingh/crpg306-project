"use client";

import Link from "next/link";

export default function AssignmentsPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center animate-wavy"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/1764415.jpg')",
        backgroundSize: "cover", // Covers the entire page
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center", // Centers the image
      }}
    >
      <div className="flex min-h-screen">
        {/* Vertical Navbar */}
        <div className="bg-gray-800 bg-opacity-90 p-4 w-1/5 flex flex-col space-y-4">
          {/* Home */}
          <Link href="/" legacyBehavior>
            <a className="flex items-center bg-gray-700 text-white p-3 rounded-md shadow-lg hover:bg-blue-500 transition">
              <span className="text-xl mr-2">🏠</span>
              <span className="text-sm">Home</span>
            </a>
          </Link>
          {/* Search */}
          <Link href="/search" legacyBehavior>
            <a className="flex items-center bg-gray-700 text-white p-3 rounded-md shadow-lg hover:bg-blue-500 transition">
              <span className="text-xl mr-2">🔍</span>
              <span className="text-sm">Search</span>
            </a>
          </Link>
          {/* Current Location */}
          <Link href="/location" legacyBehavior>
            <a className="flex items-center bg-gray-700 text-white p-3 rounded-md shadow-lg hover:bg-blue-500 transition">
              <span className="text-xl mr-2">📍</span>
              <span className="text-sm">Current Location</span>
            </a>
          </Link>
          {/* Current Weather */}
          <Link href="/current-weather" legacyBehavior>
            <a className="flex items-center bg-gray-700 text-white p-3 rounded-md shadow-lg hover:bg-blue-500 transition">
              <span className="text-xl mr-2">🌤️</span>
              <span className="text-sm">Current Weather</span>
            </a>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-end justify-center">
          <div className="bg-gradient-to-b from-gray-900 via-transparent to-gray-900 bg-opacity-90 p-6 rounded-lg max-w-md">
            {/* Project Home Page Title */}
            <h1 className="text-2xl font-bold mb-4 text-white drop-shadow-lg shadow-black text-center">
              Welcome to the <span className="text-yellow-400">JATT FORECAST</span>
            </h1>
            <p className="text-sm text-gray-320 mb-6 shadow-md shadow-black text-center leading-relaxed">
              <span className="block text-gray-100 font-semibold text-lg mb-2">
                Accurate & Real-Time Weather
              </span>
              <span className="font-bold">
                Stay ahead of the weather with precise forecasts. Track storms,
                monitor your current location, and plan your activities
                confidently with Jatt Forecast.
              </span>
            </p>
            {/* Back to Main Home Page */}
            <a
              href="/"
              className="text-sm font-medium text-yellow-400 hover:underline block text-center"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes wavy {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          50% {
            transform: translateY(10px);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-wavy {
          animation: wavy 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}

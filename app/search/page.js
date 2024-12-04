"use client";

import { useState, useEffect } from "react";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);

  // Fetch locations from the JSON file
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("/locations.json"); // Path to your hosted JSON file
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  // Filter locations based on search term
  useEffect(() => {
    if (!searchTerm) {
      setFilteredLocations([]);
      return;
    }

    const filtered = locations.filter((location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLocations(filtered);
  }, [searchTerm, locations]);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/1764415.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl font-bold text-white mb-6">Search Locations</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a city, region, or country..."
        className="w-3/4 p-3 mb-6 rounded-md border border-gray-300 text-black focus:outline-none"
      />

      {/* Display Filtered Results */}
      <div className="w-3/4 bg-gray-800 bg-opacity-90 p-4 rounded-lg">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <div
              key={location.id}
              className="bg-gray-700 text-white p-4 rounded-md shadow-md mb-4"
            >
              <h2 className="font-bold text-lg">{location.name}</h2>
              <p>Region: {location.region}</p>
              <p>Country: {location.country}</p>
              <p>Latitude: {location.lat}</p>
              <p>Longitude: {location.lon}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">
            {searchTerm ? "No results found." : "Start typing to search locations."}
          </p>
        )}
      </div>
    </div>
  );
}

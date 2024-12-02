"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex"
      style={{
        backgroundImage: "url('https://files.oaiusercontent.com/file-6vPntabq2TRqHEQgMa2UgP?se=2024-12-02T22%3A42%3A33Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dafdcf864-7347-4215-8a9b-3cd205c4c2cb.webp&sig=W2ruEcp%2BJA83v5Yx5VYCx2%2Byycx0ypqSXvfQ8uJw2b0%3D')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
      }}
    >
      {/* Left Side Text Area */}
      <div className="w-1/2 bg-black text-white p-8 flex items-center animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold mb-4 font-serif">
            History of Weather App
          </h1>
          <p className="text-lg leading-relaxed font-light font-sans">
            The idea behind creating a weather app stems from the need to
            provide real-time weather updates to users in a visually appealing
            and accessible way. From understanding local forecasts to tracking
            global weather patterns, weather apps have become an essential tool
            in daily life. With advancements in technology, these apps now
            deliver accurate, minute-by-minute updates, empowering users to
            plan their day with confidence.
          </p>
        </div>
      </div>

      {/* Right Side Button */}
      <div className="w-1/2 flex items-center justify-center">
        <Link href="/assignments" legacyBehavior>
          <a className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition">
            Go to Project
          </a>
        </Link>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}

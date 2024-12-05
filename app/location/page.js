import Link from 'next/link'; // Import the Link component

export default function WeatherPage() {
  return (
    <div
      className="flex flex-col items-center text-white bg-gray-00 bg-opacity-75 min-h-screen p-6"
      style={{
        backgroundImage: 'url("https://wallpaperaccess.com/full/5639686.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Page Title */}
      <h1 className="text-4xl font-bold mt-10 mb-6">Calgary</h1>
      
      {/* White Box */}
      <div className="bg-white text-black p-6 rounded-lg shadow-md max-w-md w-full">
        {/* Button inside the white box */}
        <Link 
          href="/current-weather" 
          className="flex items-center bg-gray-700 text-white p-3 rounded-md shadow-lg hover:bg-blue-500 transition"
        >
          <span className="text-xl mr-2">🌤️</span>
          <span className="text-sm">Current Weather</span>
        </Link>
      </div>
      
      {/* Back to Home Link */}
      <Link href="/" className="mt-10 text-yellow-400 underline text-lg hover:text-yellow-300">
        Back to Home
      </Link>
    </div>
  );
}

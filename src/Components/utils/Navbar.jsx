import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-10">
      <div className="border-2 border-[#0a0a0a] bg-white/90 hover:text-gray-700 px-8 py-2 rounded-full flex space-x-8 shadow-lg backdrop-blur-md transition-all duration-300">
        <Link
          to="/home"
          className="px-4 py-2 font-semibold text-[#010a09] hover:text-gray-700 transition-all"
        >
          Home
        </Link>

        <Link
          to="/assessment"
          className="px-4 py-2 font-semibold text-[#010a09] hover:text-gray-700 transition-all"
        >
          Assessment
        </Link>

        <Link
          to="/mentor"
          className="px-4 py-2 font-semibold text-[#010a09] hover:text-gray-700 transition-all"
        >
          Your Mentor
        </Link>
        <Link
          to="/profile"
          className="px-4 py-2 font-semibold text-[#010a09] hover:text-gray-700 transition-all"
        >
          Profile
        </Link>
      </div>
    </nav>
  );
}
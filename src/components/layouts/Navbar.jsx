import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [dark, setDark] = useState(false);

    const toggleDark = () => {
        const newDark = !dark;
        setDark(newDark);
        if (newDark) {
            document.documentElement.setAttribute("data-theme", "dark");
            document.body.style.backgroundColor = "#1a1a2e";
            document.body.style.color = "#ffffff";
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
        }
    };

    return (
        <nav style={{ backgroundColor: dark ? "#16213e" : "#ffffff" }} className="sticky top-0 z-50 shadow-md px-6 py-4 flex justify-between items-center transition-all">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-purple-700">
                ⏳ TimeCapsule
            </Link>
            <div className="flex items-center gap-6">
                <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium">About</Link>
                <Link to="/contact" className="text-gray-700 hover:text-purple-600 font-medium">Contact</Link>
                <button onClick={toggleDark} className="border border-purple-300 text-purple-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-50">
                    {dark ? "☀️ Light" : "🌙 Dark"}
                </button>
                <Link to="/signin" className="border border-purple-600 text-purple-600 px-4 py-1 rounded-full hover:bg-purple-50 font-medium">Sign In</Link>
                <Link to="/signup" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-1 rounded-full font-medium hover:opacity-90">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;
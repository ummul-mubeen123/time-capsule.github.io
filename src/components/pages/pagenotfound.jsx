import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-white">
            <div className="text-center">
                <div className="text-8xl mb-6">⏳</div>
                <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Page Not Found!</h2>
                <p className="text-gray-500 mb-8">The page you are looking for does not exist.</p>
                <Link to="/" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 shadow">🏠 Go Home</Link>
            </div>
        </div>
    );
};

export default PageNotFound;
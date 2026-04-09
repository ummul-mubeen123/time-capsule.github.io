import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-white">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96 border border-purple-100">
                <div className="text-center mb-6">
                    <div className="text-5xl mb-2">⏳</div>
                    <h1 className="text-2xl font-bold text-purple-700">Create Account</h1>
                    <p className="text-gray-500 text-sm">Join Digital Time Capsule today</p>
                </div>
                {success && <p className="text-green-600 text-sm mb-4 text-center bg-green-50 p-2 rounded-lg">✅ Account created successfully!</p>}
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} className="w-full border border-purple-200 p-2 rounded-lg mb-4 focus:outline-none focus:border-purple-400" required />
                    <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-purple-200 p-2 rounded-lg mb-4 focus:outline-none focus:border-purple-400" required />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border border-purple-200 p-2 rounded-lg mb-6 focus:outline-none focus:border-purple-400" required />
                    <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded-lg font-medium hover:opacity-90 shadow">Sign Up</button>
                </form>
                <p className="text-center mt-4 text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link to="/signin" className="text-purple-600 font-bold hover:underline">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;
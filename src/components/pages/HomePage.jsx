import { useState } from "react";

const HomePage = () => {
    const [memoryCount, setMemoryCount] = useState(142);

    const increment = () => setMemoryCount(memoryCount + 1);
    const decrement = () => {
        if (memoryCount > 0) setMemoryCount(memoryCount - 1);
    };
    const reset = () => setMemoryCount(0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-20">

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-6xl font-bold tracking-tight mb-4">
                        Welcome to <span className="text-yellow-400">Digital Time Capsule</span>
                    </h1>
                    <p className="text-2xl text-purple-200 max-w-2xl mx-auto">
                        Preserve your memories for the future
                    </p>
                </div>

                {/* Counter Section */}
                <div className="max-w-md mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl text-center mb-16">
                    <h2 className="text-3xl font-semibold mb-2 text-yellow-300">Memories Sealed</h2>
                    <div className="text-8xl font-bold text-white mb-8 tracking-tighter">
                        {memoryCount}
                    </div>

                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={decrement}
                            className="flex-1 bg-red-500 hover:bg-red-600 transition py-5 rounded-2xl text-2xl font-medium"
                        >
                            − Remove
                        </button>
                        <button
                            onClick={reset}
                            className="flex-1 bg-gray-500 hover:bg-gray-600 transition py-5 rounded-2xl text-2xl font-medium"
                        >
                            Reset
                        </button>
                        <button
                            onClick={increment}
                            className="flex-1 bg-emerald-500 hover:bg-emerald-600 transition py-5 rounded-2xl text-2xl font-medium"
                        >
                            + Add Memory
                        </button>
                    </div>

                    <p className="mt-8 text-purple-200 text-sm">
                        Every memory you add is sealed forever in your digital time capsule
                    </p>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white/10 rounded-2xl p-8 text-center">
                        <div className="text-5xl mb-4">📸</div>
                        <h3 className="text-xl font-bold mb-2">Memory Storage</h3>
                        <p className="text-purple-200 text-sm">Store photos, letters, videos and messages in your capsule.</p>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-8 text-center">
                        <div className="text-5xl mb-4">🔒</div>
                        <h3 className="text-xl font-bold mb-2">Future Unlock</h3>
                        <p className="text-purple-200 text-sm">Choose a future date when the capsule will open.</p>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-8 text-center">
                        <div className="text-5xl mb-4">🌍</div>
                        <h3 className="text-xl font-bold mb-2">Share Capsules</h3>
                        <p className="text-purple-200 text-sm">Send your capsule to friends or family anywhere.</p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-8 text-center mb-16">
                    <div>
                        <div className="text-4xl font-black text-yellow-400">20K</div>
                        <p className="text-purple-200 text-sm mt-1">Capsules Created</p>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-yellow-400">15K</div>
                        <p className="text-purple-200 text-sm mt-1">Users Joined</p>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-yellow-400">10K</div>
                        <p className="text-purple-200 text-sm mt-1">Capsules Opened</p>
                    </div>
                </div>

                <div className="text-center mt-12 text-purple-300 text-lg">
                    Built with <span className="font-medium text-white">React useState Hook</span> • Lab 07
                </div>

            </div>
        </div>
    );
};

export default HomePage;
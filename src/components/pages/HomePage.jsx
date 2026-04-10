import { useState } from "react";

const HomePage = () => {
    const [memoryCount, setMemoryCount] = useState(142); // starting value (aap change kar sakte ho)

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

                {/* Counter Section - Project Relevant */}
                <div className="max-w-md mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold mb-2 text-yellow-300">Memories Sealed</h2>
                        <div className="text-8xl font-bold text-white mb-8 tracking-tighter">
                            {memoryCount}
                        </div>

                        {/* Buttons */}
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
                </div>

                <div className="text-center mt-12 text-purple-300 text-lg">
                    Built with <span className="font-medium text-white">React useState Hook</span> • Lab 07
                </div>
            </div>
        </div>
    );
};

export default HomePage;
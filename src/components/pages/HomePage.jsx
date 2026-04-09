import { useState } from "react";
const HomePage = () => {
    const [capsules, setCapsules] = useState([]);
    const [name, setName] = useState("");
    const [owner, setOwner] = useState("");
    const [year, setYear] = useState("");
    const [type, setType] = useState("📸 Photos");
    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState("All Types");
    const [sortBy, setSortBy] = useState("Default");
    const [editId, setEditId] = useState(null);
    const [view, setView] = useState("cards");
    const [auditLog, setAuditLog] = useState([]);
    const [ledger, setLedger] = useState([]);
    const [showSummary, setShowSummary] = useState(false);
    const [ifElseResult, setIfElseResult] = useState([]);

    const addCapsule = () => {
        if (!name || !owner || !year) return;
        if (editId !== null) {
            setCapsules(capsules.map(c => c.id === editId ? { ...c, name, owner, year, type } : c));
            setEditId(null);
        } else {
            setCapsules([...capsules, { id: Date.now(), name, owner, year: parseInt(year), type, memories: Math.floor(Math.random() * 20) + 1 }]);
        }
        setName(""); setOwner(""); setYear(""); setType("📸 Photos");
    };

    const deleteCapsule = (id) => setCapsules(capsules.filter(c => c.id !== id));

    const editCapsule = (c) => {
        setEditId(c.id); setName(c.name); setOwner(c.owner); setYear(c.year); setType(c.type);
        window.scrollTo(0, 0);
    };

    const getStatus = (c) => {
        if (c.year > 2026) return "🔒 Locked";
        if (c.year === 2026) return "🟡 Opening Soon";
        if (c.memories > 15) return "📦 Full";
        if (c.type === "📸 Photos") return "📸 Photo Capsule";
        return "✅ Active";
    };

    const runIfElse = () => {
        const results = capsules.map(c => ({ name: c.name, status: getStatus(c) }));
        setIfElseResult(results);
    };

    const runAudit = () => {
        const log = [];
        let i = 0;
        while (i < capsules.length) {
            log.push(`✅ Capsule "${capsules[i].name}" — Owner: ${capsules[i].owner} — Year: ${capsules[i].year} — Valid`);
            i++;
        }
        if (log.length === 0) log.push("No capsules to audit.");
        setAuditLog(log);
    };

    const generateLedger = () => {
        const result = capsules.map((c, i) => {
            let logicStatus = "";
            if (c.year > 2026) logicStatus = "🔒 Future Lock";
            else if (c.memories > 15) logicStatus = "📦 Storage Full";
            else logicStatus = "✅ Normal";
            return { ...c, logicStatus, num: i + 1 };
        });
        setLedger(result);
    };

    let filtered = capsules.filter(c => {
        const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.owner.toLowerCase().includes(search.toLowerCase());
        const matchType = filterType === "All Types" || c.type === filterType;
        return matchSearch && matchType;
    });

    if (sortBy === "Year ↑") filtered = [...filtered].sort((a, b) => a.year - b.year);
    else if (sortBy === "Year ↓") filtered = [...filtered].sort((a, b) => b.year - a.year);
    else if (sortBy === "Name A–Z") filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="min-h-screen bg-white">

            {/* Hero */}
            <section className="text-center py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-white px-4">
                <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent">Digital Time Capsule</h1>
                <p className="text-gray-500 text-xl mb-10">Save your memories today and open them in the future.</p>
                <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition shadow-lg">🚀 Create Capsule</button>
            </section>

            {/* Features */}
            <section className="py-20 px-8 bg-white">
                <h2 className="text-4xl font-bold text-center mb-14 text-purple-800">Platform Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[
                        { icon: "📸", title: "Memory Storage", desc: "Store photos, letters, videos and messages in your capsule." },
                        { icon: "🔒", title: "Future Unlock", desc: "Choose a future date when the capsule will open." },
                        { icon: "🌍", title: "Share Capsules", desc: "Send your capsule to friends or family anywhere." }
                    ].map((f, i) => (
                        <div key={i} className="text-center p-8 border border-purple-100 rounded-2xl hover:shadow-lg hover:shadow-purple-100 transition">
                            <div className="text-5xl mb-4">{f.icon}</div>
                            <h3 className="font-bold text-xl mb-2 text-purple-700">{f.title}</h3>
                            <p className="text-gray-500">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Summary */}
            <section className="py-16 px-8 bg-gradient-to-r from-purple-50 to-blue-50">
                <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">📊 Digital Time Capsule Summary</h2>
                <div className="flex justify-center gap-4 mb-6">
                    <button onClick={() => setShowSummary(!showSummary)} className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-lg shadow">
                        {showSummary ? "Hide" : "Show"} Summary
                    </button>
                </div>
                {showSummary && (
                    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow text-center border border-purple-100">
                        <p className="text-gray-600 mb-2">Total Capsules: <strong className="text-purple-700">{capsules.length}</strong></p>
                        <p className="text-gray-600 mb-2">Total Memories: <strong className="text-purple-700">{capsules.reduce((a, c) => a + c.memories, 0)}</strong></p>
                        <p className="text-gray-600">Latest Year: <strong className="text-purple-700">{capsules.length ? Math.max(...capsules.map(c => c.year)) : "N/A"}</strong></p>
                    </div>
                )}
            </section>

            {/* If-Else */}
            <section className="py-16 px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-2 text-purple-800">Step 1 — If-Else Logic (5 Conditions)</h2>
                    <p className="text-gray-500 mb-4">5 conditional checks applied to each capsule to determine its status</p>
                    <button onClick={runIfElse} className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-lg mb-4 shadow">▶ Run If-Else Logic</button>
                    {ifElseResult.length > 0 && (
                        <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                            {ifElseResult.map((r, i) => (
                                <p key={i} className="text-gray-700 py-1 border-b border-purple-100">{r.name} → {r.status}</p>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* For Loop */}
            <section className="py-16 px-8 bg-gradient-to-r from-purple-50 to-blue-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-2 text-purple-800">Step 2 — For Loop (Cards / List / Table)</h2>
                    <p className="text-gray-500 mb-4">Display capsules using for loop in 3 different views</p>
                    <div className="flex gap-3 mb-6">
                        {["cards", "list", "table"].map(v => (
                            <button key={v} onClick={() => setView(v)} className={`px-4 py-2 rounded-lg font-medium transition ${view === v ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow" : "border border-purple-300 text-purple-700 hover:bg-purple-50"}`}>
                                {v === "cards" ? "📦 Cards" : v === "list" ? "📋 List" : "📊 Table"}
                            </button>
                        ))}
                    </div>

                    {view === "cards" && (
                        <div className="grid grid-cols-3 gap-4">
                            {filtered.length === 0 && <p className="text-gray-400 col-span-3 text-center">No capsules found.</p>}
                            {filtered.map(c => (
                                <div key={c.id} className="bg-white p-4 rounded-2xl shadow border border-purple-100">
                                    <div className="text-3xl mb-2">{c.type.split(" ")[0]}</div>
                                    <h3 className="font-bold text-purple-700">{c.name}</h3>
                                    <p className="text-gray-500 text-sm">👤 {c.owner}</p>
                                    <p className="text-gray-500 text-sm">📅 {c.year}</p>
                                    <p className="text-sm mt-1 text-blue-600">{getStatus(c)}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {view === "list" && (
                        <div className="space-y-3">
                            {filtered.length === 0 && <p className="text-gray-400 text-center">No capsules found.</p>}
                            {filtered.map(c => (
                                <div key={c.id} className="bg-white p-4 rounded-xl shadow border border-purple-100 flex justify-between items-center">
                                    <div>
                                        <span className="font-bold text-purple-700">{c.name}</span>
                                        <span className="text-gray-500 text-sm ml-4">👤 {c.owner} | 📅 {c.year} | {c.type}</span>
                                    </div>
                                    <span className="text-sm text-blue-600">{getStatus(c)}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {view === "table" && (
                        <table className="w-full bg-white rounded-2xl shadow overflow-hidden border border-purple-100">
                            <thead className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                                <tr>{["#", "Name", "Owner", "Year", "Type", "Status"].map(h => <th key={h} className="p-3 text-left">{h}</th>)}</tr>
                            </thead>
                            <tbody>
                                {filtered.length === 0 && <tr><td colSpan="6" className="text-center p-4 text-gray-400">No capsules found.</td></tr>}
                                {filtered.map((c, i) => (
                                    <tr key={c.id} className="border-t border-purple-50 hover:bg-purple-50">
                                        <td className="p-3">{i + 1}</td>
                                        <td className="p-3 text-purple-700 font-medium">{c.name}</td>
                                        <td className="p-3">{c.owner}</td>
                                        <td className="p-3">{c.year}</td>
                                        <td className="p-3">{c.type}</td>
                                        <td className="p-3 text-blue-600">{getStatus(c)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </section>

            {/* While Loop Audit */}
            <section className="py-16 px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-2 text-purple-800">Step 3 — While Loop (System Audit)</h2>
                    <p className="text-gray-500 mb-4">Validate each capsule using while loop and show audit log</p>
                    <button onClick={runAudit} className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-lg mb-4 shadow">▶ Run System Audit</button>
                    {auditLog.length > 0 && (
                        <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                            <p className="font-bold mb-2 text-purple-700">📋 System Audit Log</p>
                            {auditLog.map((l, i) => <p key={i} className="text-gray-700 text-sm py-1 border-b border-purple-100">{l}</p>)}
                        </div>
                    )}
                </div>
            </section>

            {/* Ledger */}
            <section className="py-16 px-8 bg-gradient-to-r from-purple-50 to-blue-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-2 text-purple-800">Step 4 — Loops with Conditions (Inventory Ledger)</h2>
                    <p className="text-gray-500 mb-4">Categorize capsules using combined loop + conditional logic</p>
                    <button onClick={generateLedger} className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-lg mb-4 shadow">▶ Generate Ledger</button>
                    {ledger.length > 0 && (
                        <table className="w-full bg-white rounded-2xl shadow overflow-hidden border border-purple-100">
                            <thead className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                                <tr>{["#", "Capsule", "Memories", "Year", "Logic Status"].map(h => <th key={h} className="p-3 text-left">{h}</th>)}</tr>
                            </thead>
                            <tbody>
                                {ledger.map(c => (
                                    <tr key={c.id} className="border-t border-purple-50 hover:bg-purple-50">
                                        <td className="p-3">{c.num}</td>
                                        <td className="p-3 text-purple-700 font-medium">{c.name}</td>
                                        <td className="p-3">{c.memories}</td>
                                        <td className="p-3">{c.year}</td>
                                        <td className="p-3 text-blue-600">{c.logicStatus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </section>

            {/* CRUD */}
            <section className="py-16 px-8 bg-white">
                <h2 className="text-3xl font-bold text-center mb-10 text-purple-800">🗃️ Capsule Manager (CRUD)</h2>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl shadow border border-purple-100">
                        <h3 className="font-bold text-xl mb-4 text-purple-700">➕ {editId ? "Update" : "Add New"} Capsule</h3>
                        <div className="flex gap-2 mb-4 flex-wrap">
                            {["📸 Photos", "🎬 Videos", "💌 Letters", "🎁 Mixed"].map(t => (
                                <button key={t} onClick={() => setType(t)} className={`px-3 py-1 rounded-lg text-sm font-medium transition ${type === t ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white" : "border border-purple-300 text-purple-700 hover:bg-purple-50"}`}>{t}</button>
                            ))}
                        </div>
                        <input value={name} onChange={e => setName(e.target.value)} placeholder="Capsule Name" className="w-full border border-purple-200 p-2 rounded-lg mb-3 focus:outline-none focus:border-purple-400" />
                        <input value={owner} onChange={e => setOwner(e.target.value)} placeholder="Owner Name" className="w-full border border-purple-200 p-2 rounded-lg mb-3 focus:outline-none focus:border-purple-400" />
                        <input value={year} onChange={e => setYear(e.target.value)} placeholder="Year" type="number" className="w-full border border-purple-200 p-2 rounded-lg mb-4 focus:outline-none focus:border-purple-400" />
                        <button onClick={addCapsule} className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition shadow">
                            {editId ? "✅ Update Capsule" : "+ Add to Collection"}
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl shadow border border-purple-100">
                        <h3 className="font-bold text-xl mb-4 text-purple-700">🔍 Search & Filter</h3>
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or owner..." className="w-full border border-purple-200 p-2 rounded-lg mb-3 focus:outline-none focus:border-purple-400" />
                        <select value={filterType} onChange={e => setFilterType(e.target.value)} className="w-full border border-purple-200 p-2 rounded-lg mb-3 focus:outline-none focus:border-purple-400">
                            <option>All Types</option>
                            <option>📸 Photos</option>
                            <option>🎬 Videos</option>
                            <option>💌 Letters</option>
                            <option>🎁 Mixed</option>
                        </select>
                        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="w-full border border-purple-200 p-2 rounded-lg focus:outline-none focus:border-purple-400">
                            <option>Sort: Default</option>
                            <option>Year ↑</option>
                            <option>Year ↓</option>
                            <option>Name A–Z</option>
                        </select>
                    </div>
                </div>

                {/* Capsule Cards */}
                <div className="max-w-5xl mx-auto mt-8">
                    {filtered.length === 0 && <p className="text-center text-gray-400 py-8">No capsules found.</p>}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {filtered.map(c => (
                            <div key={c.id} className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 rounded-2xl p-5 shadow hover:shadow-md transition">
                                <div className="text-4xl mb-3">{c.type.split(" ")[0]}</div>
                                <h3 className="font-bold text-lg text-purple-700">{c.name}</h3>
                                <p className="text-gray-500 text-sm">👤 {c.owner}</p>
                                <p className="text-gray-500 text-sm">📅 {c.year}</p>
                                <p className="text-gray-500 text-sm">🧠 {c.memories} memories</p>
                                <p className="text-sm mt-2 font-semibold text-blue-600">{getStatus(c)}</p>
                                <div className="flex gap-2 mt-4">
                                    <button onClick={() => editCapsule(c)} className="flex-1 border border-purple-300 text-purple-700 py-1 rounded-lg text-sm hover:bg-purple-50">✏️ Edit</button>
                                    <button onClick={() => deleteCapsule(c.id)} className="flex-1 bg-red-500 text-white py-1 rounded-lg text-sm hover:bg-red-600">🗑️ Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-16 px-8 bg-gradient-to-r from-purple-50 to-blue-50">
                <h2 className="text-3xl font-bold text-center mb-10 text-purple-800">Memory Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {["tc1", "tc2", "tc3", "tc4"].map(seed => (
                        <img key={seed} src={`https://picsum.photos/seed/${seed}/400/250`} alt="memory" className="rounded-2xl w-full object-cover hover:scale-105 transition shadow" />
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-white text-center">
                <div className="flex justify-center gap-20">
                    <div><div className="text-5xl font-bold text-purple-600">20K</div><div className="text-gray-500 mt-1">Capsules Created</div></div>
                    <div><div className="text-5xl font-bold text-blue-500">15K</div><div className="text-gray-500 mt-1">Users Joined</div></div>
                    <div><div className="text-5xl font-bold text-purple-600">10K</div><div className="text-gray-500 mt-1">Capsules Opened</div></div>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center p-8 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
                <p className="text-xl mb-2">⏳ Digital Time Capsule</p>
                <div className="flex justify-center gap-6 text-purple-300 text-sm mb-4">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/signin">Sign In</a>
                    <a href="/signup">Sign Up</a>
                </div>
                <p className="text-purple-400 text-sm">© 2026 Ummul Mubeen | SAP: 70150503 | University of Lahore</p>
            </footer>
        </div>
    );
};

export default HomePage;
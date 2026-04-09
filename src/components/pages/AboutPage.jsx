import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white px-4">
        <p className="text-purple-500 font-medium mb-2">Who We Are</p>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent">About Digital Time Capsule</h1>
        <p className="text-gray-500 max-w-xl mx-auto mb-8">A platform that lets you store memories, letters and media for the future. Your capsule opens automatically on the selected date.</p>
        <div className="flex justify-center gap-4">
          <Link to="/signup" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 shadow">Get Started →</Link>
          <Link to="/contact" className="border border-purple-400 text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-purple-50">Contact Us</Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 text-center bg-white">
        <div className="flex justify-center gap-20">
          <div><div className="text-5xl font-bold text-purple-600">20K+</div><div className="text-gray-500 mt-1">📦 Capsules Created</div></div>
          <div><div className="text-5xl font-bold text-blue-500">15K+</div><div className="text-gray-500 mt-1">👥 Happy Users</div></div>
          <div><div className="text-5xl font-bold text-purple-600">50+</div><div className="text-gray-500 mt-1">🌍 Countries</div></div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 px-8 bg-gradient-to-r from-purple-50 to-blue-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Our Journey</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          {[
            { year: "2024", icon: "💡", title: "The Idea Was Born", desc: "Started with a vision to help people preserve digital memories in a meaningful and secure way." },
            { year: "2025", icon: "⚙️", title: "Development Phase", desc: "Built using HTML, Tailwind CSS and JavaScript. Designed to be simple, secure and beautiful." },
            { year: "2026", icon: "🚀", title: "Global Launch", desc: "Platform launched for global users across 50+ countries. 15K+ users joined within first month." }
          ].map((j, i) => (
            <div key={i} className="flex gap-6 bg-white p-6 rounded-2xl shadow border border-purple-100">
              <div className="font-bold text-xl text-purple-600 min-w-12">{j.year}</div>
              <div>
                <h3 className="font-bold text-purple-700">{j.icon} {j.title}</h3>
                <p className="text-gray-500 mt-1">{j.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {[
            { icon: "🔒", title: "Secure Storage", desc: "End-to-end encrypted. Only you and recipients can access." },
            { icon: "📅", title: "Scheduled Unlock", desc: "Choose any future date — 1 day to 100 years." },
            { icon: "🌍", title: "Share Globally", desc: "Share with loved ones anywhere in the world." }
          ].map((f, i) => (
            <div key={i} className="p-8 border border-purple-100 rounded-2xl hover:shadow-lg transition">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-purple-700">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Creator */}
      <section className="py-16 text-center bg-gradient-to-r from-purple-50 to-blue-50">
        <h2 className="text-3xl font-bold mb-8 text-purple-800">Meet the Creator</h2>
        <div className="text-7xl mb-4">👩‍💻</div>
        <h3 className="text-2xl font-bold text-purple-700">Ummul Mubeen</h3>
        <p className="text-gray-500">SAP: 70150503</p>
        <p className="text-gray-500">University of Lahore</p>
        <div className="flex justify-center gap-2 mt-4">
          {["HTML", "Tailwind", "CSS", "JavaScript", "React"].map(s => (
            <span key={s} className="border border-purple-300 text-purple-600 px-3 py-1 rounded-full text-sm">{s}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-8 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <p className="text-xl mb-2">⏳ Digital Time Capsule</p>
        <div className="flex justify-center gap-6 text-purple-300 text-sm mb-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
        <p className="text-purple-400 text-sm">© 2026 Ummul Mubeen | SAP: 70150503 | University of Lahore</p>
      </footer>
    </div>
  );
};

export default AboutPage;
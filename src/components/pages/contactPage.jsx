import { useState } from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <div className="min-h-screen bg-white">

            {/* Hero */}
            <section className="text-center py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent">Get in Touch</h1>
                <p className="text-gray-500 text-lg">We would love to hear from you. Send us a message!</p>
            </section>

            {/* Contact Info + Form */}
            <section className="py-16 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    {[
                        { icon: "📧", title: "Email", info: "ummulmubeen@uol.edu.pk" },
                        { icon: "📞", title: "Phone", info: "+92 300 1234567" },
                        { icon: "📍", title: "Location", info: "Lahore, Pakistan" }
                    ].map((c, i) => (
                        <div key={i} className="flex gap-4 p-4 border border-purple-100 rounded-2xl hover:shadow transition">
                            <div className="text-4xl">{c.icon}</div>
                            <div>
                                <h3 className="font-bold text-purple-700">{c.title}</h3>
                                <p className="text-gray-500">{c.info}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl shadow border border-purple-100">
                    <h3 className="font-bold text-xl mb-4 text-purple-700">Send Message</h3>
                    {sent && <p className="text-green-600 mb-4 bg-green-50 p-2 rounded-lg">✅ Message sent! We'll get back to you soon.</p>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" placeholder="Full Name *" required className="w-full border border-purple-200 p-2 rounded-lg focus:outline-none focus:border-purple-400" />
                        <input type="email" placeholder="Email Address *" required className="w-full border border-purple-200 p-2 rounded-lg focus:outline-none focus:border-purple-400" />
                        <input type="text" placeholder="Subject *" required className="w-full border border-purple-200 p-2 rounded-lg focus:outline-none focus:border-purple-400" />
                        <textarea placeholder="Message *" required rows="4" className="w-full border border-purple-200 p-2 rounded-lg focus:outline-none focus:border-purple-400"></textarea>
                        <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded-lg font-medium hover:opacity-90 shadow">Send Message</button>
                    </form>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-8 bg-gradient-to-r from-purple-50 to-blue-50">
                <h2 className="text-3xl font-bold text-center mb-10 text-purple-800">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {[
                        { q: "How do I create a time capsule?", a: "Simply sign up and create a capsule by uploading your memories." },
                        { q: "When will my capsule open?", a: "You choose the exact future date when it unlocks automatically." },
                        { q: "Can I share capsules with friends?", a: "Yes! Share via private link or invite by email." }
                    ].map((f, i) => (
                        <div key={i} className="bg-white p-5 rounded-2xl shadow border border-purple-100">
                            <h4 className="font-bold text-purple-700 mb-1">{f.q}</h4>
                            <p className="text-gray-500">{f.a}</p>
                        </div>
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

export default ContactPage;
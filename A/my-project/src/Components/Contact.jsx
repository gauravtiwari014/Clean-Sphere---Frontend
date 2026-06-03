import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, User, MessageSquare, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"; 
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        () => {
          setStatus("❌ Failed to send message. Try again!");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 p-6 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[95%] md:w-4/5 lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <h2 className="text-3xl font-extrabold text-green-600 mb-4">📬 Send Us a Message</h2>
          <p className="text-gray-600 mb-6">
            Report waste issues, drainage problems, road maintenance, or share suggestions with us.  
            Your feedback helps us build a cleaner community. 🌱
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
              <User className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent flex-1 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
              <Mail className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent flex-1 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex items-start border rounded-lg px-3 py-2 bg-gray-50">
              <MessageSquare className="text-gray-400 mr-2 mt-1" />
              <textarea
                placeholder="Your Message"
                className="bg-transparent flex-1 outline-none resize-none h-28"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg shadow-md font-bold transform transition duration-300 hover:scale-105 hover:from-green-600 hover:to-blue-700"
            >
              Send Message 🚀
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center font-medium text-green-600">
              {status}
            </p>
          )}
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-inner flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-blue-600 mb-4">📞 Contact Info</h2>
            <p className="text-gray-600 mb-6">
              Reach us directly through the following details:
            </p>

            <div className="space-y-4">
              <a href="tel:+919876543210" className="flex items-center text-gray-600 hover:text-green-700 transition">
                <Phone className="w-5 h-5 mr-2 text-green-600" /> +91 98765 43210
              </a>
              <a href="mailto:support@municipality.gov.in" className="flex items-center text-gray-600 hover:text-blue-700 transition">
                <Mail className="w-5 h-5 mr-2 text-blue-600" /> support@municipality.gov.in
              </a>
              <a
                href="https://www.google.com/maps?q=Municipal+Office+Main+Road+City+123456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-red-700 transition"
              >
                <MapPin className="w-5 h-5 mr-2 text-red-600" /> Municipal Office, Main Road, City - 123456
              </a>
            </div>
          </div>

          <div className="mt-6">
            <iframe
              title="Municipality Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.955680136358!2d72.8335!3d19.1150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630c0c84a77%3A0xa07f9e50c2e6cd9c!2sMunicipal%20Office!5e0!3m2!1sen!2sin!4v1693564815692!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-125 transition">
                <Facebook className="w-7 h-7" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:scale-125 transition">
                <Twitter className="w-7 h-7" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-125 transition">
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition transform hover:scale-110"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </div>
  );
}
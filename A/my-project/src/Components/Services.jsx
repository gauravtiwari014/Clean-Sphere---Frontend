import React from "react";
import { Trash2, Droplet, Map, PhoneCall, Building2, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; 

export default function Services() {
  const services = [
    {
      title: "Waste Reporting",
      description: "Easily click a photo of waste and report directly to the municipality for quick action.",
      icon: <Trash2 className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Sanitation & Cleaning",
      description: "Track sanitation requests and ensure timely cleaning of public spaces.",
      icon: <Droplet className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Road & Pothole Reporting",
      description: "Report damaged roads and potholes with location details for faster repairs.",
      icon: <Map className="w-10 h-10 text-yellow-600" />,
    },
    {
      title: "Emergency Helpline",
      description: "Quick access to municipality emergency numbers for urgent situations.",
      icon: <PhoneCall className="w-10 h-10 text-red-600" />,
    },
    {
      title: "Civic Services",
      description: "Apply for permits, licenses, or submit other official requests online.",
      icon: <Building2 className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Streetlight & Drainage",
      description: "Report faulty streetlights or drainage issues to maintain public safety.",
      icon: <Lightbulb className="w-10 h-10 text-orange-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      

      <div className="relative h-[50vh] flex items-center justify-center text-center bg-cover bg-center" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')" }}>
        

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">🌍 Our Services</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Building a cleaner, greener, and smarter city – together with you.  
            Explore the services we provide for a better tomorrow.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transform transition"
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="p-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Key Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mb-16">
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-10 rounded-2xl shadow-2xl inline-block">
          <h2 className="text-3xl font-bold mb-4">🚀 Ready to Report an Issue?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Help us make the city better! Click below to send a message or report waste, drainage, road, or civic issues.
          </p>
          <Link
            to="/report"
            className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-xl shadow-lg hover:scale-105 transform transition"
          >
            Report Now <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
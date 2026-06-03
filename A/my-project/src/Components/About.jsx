import React from 'react'

function About() {
  return (
    <div className="p-5 sm:p-12 text-white max-w-7xl mx-auto text-shadow-md">
      <h1 className="text-4xl sm:text-5xl text-center mb-10 text-green-600">
        CLEAN SPHERE
      </h1>

      <div className="bg-white/10 p-8 rounded-xl mb-8">
        <h2 className="text-green-600 mb-5 text-2xl">Project Overview</h2>
        <p className="text-lg leading-relaxed">
          Our Waste Management System is designed to address critical environmental issues in both rural and urban areas. 
          The platform enables residents to easily report problems like garbage accumulation, road maintenance needs, 
          drain blockages, and pest control requirements. By bridging the gap between citizens and local authorities, 
          we ensure timely resolution of waste-related issues through our Municipality and Nagar Palika partnerships.
        </p>
      </div>

      <div className="bg-white/10 p-8 rounded-xl mb-8">
        <h2 className="text-green-600 mb-5 text-2xl">Key Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 bg-green-600/20 rounded-lg">
            <h3 className="text-green-600 text-lg font-semibold mb-2">Issue Reporting</h3>
            <p className="text-sm">Simple platform for residents to report waste management problems with photo evidence and detailed descriptions</p>
          </div>
          <div className="p-5 bg-green-600/20 rounded-lg">
            <h3 className="text-green-600 text-lg font-semibold mb-2">Automated Routing</h3>
            <p className="text-sm">Intelligent system that automatically forwards reports to the nearest Municipality or Nagar Palika authority</p>
          </div>
          <div className="p-5 bg-green-600/20 rounded-lg">
            <h3 className="text-green-600 text-lg font-semibold mb-2">Rural Accessibility</h3>
            <p className="text-sm">Special focus on making waste management services accessible to rural communities</p>
          </div>
          <div className="p-5 bg-green-600/20 rounded-lg">
            <h3 className="text-green-600 text-lg font-semibold mb-2">Quick Resolution</h3>
            <p className="text-sm">Streamlined process ensuring faster response and resolution times from local authorities</p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 p-8 rounded-xl mb-8">
        <h2 className="text-green-600 mb-5 text-2xl">How It Works</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center font-bold text-white">
              1
            </div>
            <span>Residents register and report issues with photos and descriptions</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center font-bold text-white">
              2
            </div>
            <span>System automatically routes reports to the nearest local authority</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center font-bold text-white">
              3
            </div>
            <span>Municipality/Nagar Palika receives and processes the complaint</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center font-bold text-white">
              4
            </div>
            <span>Timely resolution of issues including garbage removal, road repairs, and pest control</span>
          </div>
        </div>
      </div>

      <div className="bg-white/10 p-8 rounded-xl mb-8">
        <h2 className="text-green-600 mb-5 text-2xl">Problems We Address</h2>
        <ul className="pl-5 leading-loose text-lg">
          <li><strong>Garbage Removal:</strong> Efficient waste collection from public places and residential areas</li>
          <li><strong>Road Maintenance:</strong> Reporting and resolution of road construction and repair issues</li>
          <li><strong>Drain Cleaning:</strong> Addressing blocked drains and water logging problems</li>
          <li><strong>Pest Control:</strong> Pesticide spraying to prevent bad odors and health hazards</li>
          <li><strong>Public Health:</strong> Overall improvement in community cleanliness and sanitation</li>
        </ul>
      </div>

      <div className="bg-white/10 p-8 rounded-xl">
        <h2 className="text-green-600 mb-5 text-2xl">Our Impact</h2>
        <p className="text-lg leading-relaxed mb-4">
          By connecting citizens directly with local authorities, we've created a transparent and efficient system that:
        </p>
        <ul className="pl-5 leading-loose">
          <li>Reduces response time for waste management issues by 70%</li>
          <li>Increases citizen participation in community cleanliness initiatives</li>
          <li>Provides rural areas with equal access to municipal services</li>
          <li>Creates cleaner, healthier living environments for all communities</li>
          <li>Builds stronger partnerships between residents and local governments</li>
        </ul>
      </div>
    </div>
  )
}

export default About
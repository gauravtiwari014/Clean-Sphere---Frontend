import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav className="flex justify-end gap-5 text-2xl text-white bg-amber-900 p-4 fixed top-0 right-0 w-full z-50">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/services">Services</Link>
      <Link to="/report">Report</Link>
      <Link to="/TrackingPage">TrackingPage</Link>

    </nav>
  )
}

export default Navbar

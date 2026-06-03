import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Report from "./Components/Report";
import TrackingPage from "./Components/TrackingPage";
import AdminPage from "./Components/AdminPage";


import { Route, Routes } from "react-router-dom";

function App () {
  return (
    <div
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/4190899.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        paddingTop: '80px'   
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/report" element={<Report />} />
        <Route path="/TrackingPage" element={<TrackingPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  )
}

  
export default App
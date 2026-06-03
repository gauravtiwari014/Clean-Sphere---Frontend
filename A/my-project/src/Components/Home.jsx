import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }
  const handleSignupClick = () => {
    navigate('/signup')
  }
  

  return (
    <div style={{
      textAlign: 'none',
      padding: '50px 20px',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
    }}>
      <h1 style={{ fontSize: '5rem', marginBottom: '40px' }}>
        Connect With Your <br></br>Municipality
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '30px'  }}>
       Our Main Aim is to provide the basic and tregic Problem of Rural Area as Well as Urban Area like Road Construction , Waste (Garbage) Removal from Public Places, drain cleaning and pesticides powder Spray to Prevent bad smell etc.
       To The  Municipalities and In Nagar Palika ...
      </p>
      <button 
        onClick={handleLoginClick}
        style={{
          padding: '15px 30px',
          fontSize: '1.1rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#45a049';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#4CAF50';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        }}>
        Login
      </button>
      <button 
        onClick={handleSignupClick}
        style={{
          padding: '15px 30px',
          fontSize: '1.1rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#45a049';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#4CAF50';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        }}>
        Signup
      </button>
    </div>
  )}

      
export default Home
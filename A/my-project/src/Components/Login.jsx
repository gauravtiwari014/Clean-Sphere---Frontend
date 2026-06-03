import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async () => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:6000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Login failed");
      return;
    }

    // ✅ SAVE TOKEN & USER
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    // ✅ Redirect after login
    navigate("/report");
  } catch (err) {
    alert("Server unreachable");
  }
};

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#2c3e50',
          fontSize: '2rem'
        }}>
          Login
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: 'bold',
              color: '#34495e'
            }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #bdc3c7',
                borderRadius: '5px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              placeholder="Enter your email"
              required
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: 'bold',
              color: '#34495e'
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #bdc3c7',
                borderRadius: '5px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#45a049';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#4CAF50';
            }}
          >
            Sign In
          </button>
        </form>

        <p style={{
          textAlign: 'center',
          marginTop: '20px',
          color: '#7f8c8d'
        }}>
          Don't have an account? <span style={{
            color: '#3498db',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  )
}
export default Login

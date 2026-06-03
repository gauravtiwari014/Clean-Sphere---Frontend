import React, { useState } from "react";

function AdminPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  const teamMembers = [
    { email: "gt588106@gmail.com", password: "granger2" },
    { email: "aliya234@gmail.com", password: "aliya12" },
    { email: "rousan24@gmail.com", password: "rousan22" },
    { email: "aman240@gmail.com",  password: "aman21" },
  ];

  const names = [
    "Rahul Sharma",
    "Amit Kumar",
    "Priya Singh",
    "Rohit Verma",
    "Anjali Gupta",
    "Suresh Yadav",
    "Neha Mishra",
    "Vikas Singh",
  ];

  const locations = [
    "Lucknow",
    "Delhi",
    "Noida",
    "Kanpur",
    "Ghaziabad",
    "Varanasi",
    "Agra",
    "Prayagraj",
  ];

  const issues = [
    "Garbage near market",
    "Drain blockage",
    "Roadside waste",
    "Bad smell in colony",
    "Street garbage overflow",
    "Dirty public area",
    "Road cleaning needed",
  ];

  const municipalities = [
    "Lucknow Nagar Nigam",
    "Delhi Municipal Corp",
    "Noida Authority",
    "Kanpur Nagar Nigam",
    "Ghaziabad Nagar Nigam",
  ];

  const randomItem = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];

  const createRandomForm = () => {
    const randomId =
      "CS" + Math.floor(1000 + Math.random() * 9000);

    return {
      id: randomId,
      name: randomItem(names),
      location: randomItem(locations),
      pincode:
        Math.floor(100000 + Math.random() * 900000),
      issue: randomItem(issues),
      municipality: randomItem(municipalities),
    };
  };

  const [currentForm, setCurrentForm] =
    useState(createRandomForm());

  const handleLogin = (e) => {
    e.preventDefault();

    const found = teamMembers.find(
      (item) =>
        item.email === loginData.email &&
        item.password === loginData.password
    );

    if (found) {
      setIsLoggedIn(true);
      setMessage("");
    } else {
      setMessage("Only team members can login.");
    }
  };

  const nextForm = () => {
    setCurrentForm(createRandomForm());
  };

  const acceptForm = () => {
    setMessage(currentForm.id + " accepted.");
    nextForm();
  };

  const rejectForm = () => {
    setMessage(currentForm.id + " rejected.");
    nextForm();
  };

  const sendCase = () => {
    setMessage(
      currentForm.id +
        " sent to " +
        currentForm.municipality
    );
    nextForm();
  };

  // LOGIN PAGE
  if (!isLoggedIn) {
    return (
      <div style={styles.loginPage}>
        <div style={styles.overlay}>
          <div style={styles.loginBox}>
            <h1 style={styles.heading}>
              Secure Admin Access
            </h1>

            <p style={styles.sub}>
              Authorized Members Only
            </p>

            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Official Email"
                style={styles.input}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  })
                }
              />

              <input
                type="password"
                placeholder="Password"
                style={styles.input}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
              />

              <button
                type="submit"
                style={styles.loginBtn}
              >
                Login
              </button>
            </form>

            <p style={styles.error}>{message}</p>
          </div>
        </div>
      </div>
    );
  }

  // ADMIN PANEL
  return (
    <div style={styles.dashboard}>
      <h1 style={styles.title}>
        Smart Admin Complaint Panel
      </h1>

      <p style={styles.msg}>{message}</p>

      <div style={styles.card}>
        <h2>{currentForm.id}</h2>

        <p><b>Name:</b> {currentForm.name}</p>
        <p><b>Location:</b> {currentForm.location}</p>
        <p><b>Pincode:</b> {currentForm.pincode}</p>
        <p><b>Issue:</b> {currentForm.issue}</p>
        <p>
          <b>Nearby Municipality:</b>{" "}
          {currentForm.municipality}
        </p>

        <div style={styles.row}>
          <button
            style={styles.accept}
            onClick={acceptForm}
          >
            Accept
          </button>

          <button
            style={styles.reject}
            onClick={rejectForm}
          >
            Reject
          </button>

          <button
            style={styles.send}
            onClick={sendCase}
          >
            Send Case
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  loginPage: {
    minHeight: "100vh",
    background:
      "linear-gradient(to right,#0f2027,#203a43,#2c5364)",
  },

  overlay: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  loginBox: {
    width: "420px",
    background: "white",
    padding: "35px",
    borderRadius: "18px",
    boxShadow: "0 0 25px rgba(0,0,0,0.25)",
  },

  heading: {
    textAlign: "center",
    color: "#2e7d32",
  },

  sub: {
    textAlign: "center",
    color: "#555",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginTop: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },

  loginBtn: {
    width: "100%",
    padding: "14px",
    marginTop: "18px",
    background: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },

  error: {
    color: "red",
    textAlign: "center",
    marginTop: "12px",
  },

  dashboard: {
    minHeight: "100vh",
    background: "#eef8ee",
    padding: "30px",
  },

  title: {
    textAlign: "center",
    color: "#2e7d32",
  },

  msg: {
    textAlign: "center",
    color: "green",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    maxWidth: "600px",
    margin: "auto",
    boxShadow: "0 0 12px rgba(0,0,0,0.15)",
  },

  row: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
    flexWrap: "wrap",
  },

  accept: {
    padding: "10px 16px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: "8px",
  },

  reject: {
    padding: "10px 16px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "8px",
  },

  send: {
    padding: "10px 16px",
    background: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "8px",
  },
};

export default AdminPage;
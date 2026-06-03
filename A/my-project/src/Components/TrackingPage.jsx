import React, { useState } from "react";

function TrackingPage() {
  const [complaintId, setComplaintId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const trackComplaint = () => {
    const reports =
      JSON.parse(
        localStorage.getItem("reports")
      ) || [];

    const found = reports.find(
      (item) =>
        item.id.toLowerCase() ===
        complaintId.toLowerCase()
    );

    if (found) {
      setResult(found);
      setError("");
    } else {
      setResult(null);
      setError("Invalid Complaint ID");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h1 style={styles.title}>
          Track Complaint Status
        </h1>

        <div style={styles.row}>
          <input
            type="text"
            placeholder="Enter Complaint ID"
            value={complaintId}
            onChange={(e) =>
              setComplaintId(
                e.target.value
              )
            }
            style={styles.input}
          />

          <button
            onClick={
              trackComplaint
            }
            style={styles.button}
          >
            Track
          </button>
        </div>

        {error && (
          <p style={styles.error}>
            {error}
          </p>
        )}

        {result && (
          <div style={styles.card}>
            <h2>{result.id}</h2>

            <p>
              <b>Name:</b>{" "}
              {result.name}
            </p>

            <p>
              <b>Location:</b>{" "}
              {result.location}
            </p>

            <p>
              <b>Pincode:</b>{" "}
              {result.pincode}
            </p>

            <p>
              <b>Status:</b>{" "}
              {result.status}
            </p>

            <p>
              <b>Date:</b>{" "}
              {result.date}
            </p>

            <p>
              <b>Description:</b>{" "}
              {
                result.description
              }
            </p>

            <div
              style={
                styles.progressBar
              }
            >
              <div
                style={
                  styles.progress
                }
              ></div>
            </div>

            <p
              style={
                styles.progressText
              }
            >
              Resolution in
              Progress
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "#eef8ee",
    display: "flex",
    justifyContent:
      "center",
    alignItems:
      "center",
    padding: "20px",
  },

  box: {
    width: "100%",
    maxWidth: "700px",
    background:
      "white",
    padding: "35px",
    borderRadius:
      "18px",
    boxShadow:
      "0 0 18px rgba(0,0,0,0.15)",
  },

  title: {
    textAlign:
      "center",
    color:
      "#2e7d32",
    fontSize: "32px",
    marginBottom:
      "25px",
  },

  row: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },

  input: {
    flex: 1,
    padding: "15px",
    fontSize: "18px",
    borderRadius:
      "10px",
    border:
      "1px solid #ccc",
  },

  button: {
    padding:
      "15px 28px",
    fontSize: "18px",
    background:
      "#2e7d32",
    color:
      "white",
    border: "none",
    borderRadius:
      "10px",
    cursor:
      "pointer",
    fontWeight:
      "bold",
  },

  error: {
    color: "red",
    fontSize: "18px",
    marginTop: "15px",
    textAlign:
      "center",
  },

  card: {
    marginTop: "25px",
    background:
      "#f8fff8",
    padding: "25px",
    borderRadius:
      "15px",
    border:
      "2px solid #d6f5d6",
    fontSize: "22px",
    lineHeight: "1.8",
  },

  progressBar: {
    width: "100%",
    height: "20px",
    background:
      "#ddd",
    borderRadius:
      "10px",
    marginTop: "20px",
    overflow:
      "hidden",
  },

  progress: {
    width: "65%",
    height: "100%",
    background:
      "#2e7d32",
  },

  progressText: {
    marginTop: "10px",
    textAlign:
      "center",
    color:
      "#2e7d32",
    fontWeight:
      "bold",
    fontSize: "20px",
  },
};

export default TrackingPage;
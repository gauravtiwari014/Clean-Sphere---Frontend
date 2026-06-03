import React, { useState } from "react";
import Tesseract from "tesseract.js";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

function Report() {
  const [form, setForm] = useState({
    name: "",
    pincode: "",
    location: "",
    photo: null,
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [checking, setChecking] = useState(false);

  const validCities = [
    "Lucknow",
    "Delhi",
    "Noida",
    "Kanpur",
    "Ghaziabad",
    "Agra",
    "Varanasi",
  ];

  const wasteWords = [
    "garbage",
    "waste",
    "trash",
    "dirty",
    "drain",
    "overflow",
    "road",
    "cleaning",
    "smell",
    "blocked",
    "sewage",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  // OCR + AI IMAGE DETECTOR
  const detectImage = async (file) => {
    // File type
    const allowed = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/webp",
    ];

    if (!allowed.includes(file.type)) {
      return false;
    }

    // Resume filename check
    const badNames = [
      "resume",
      "cv",
      "certificate",
      "marksheet",
      "document",
      "aadhaar",
    ];

    const fileName =
      file.name.toLowerCase();

    const badFile =
      badNames.some((word) =>
        fileName.includes(word)
      );

    if (badFile) return false;

    // OCR TEXT DETECTION
    const ocr =
      await Tesseract.recognize(
        file,
        "eng"
      );

    const text =
      ocr.data.text.trim();

    if (text.length > 80) {
      return false;
    }

    // MobileNet detection
    const img = new Image();
    img.src =
      URL.createObjectURL(file);

    return new Promise(
      (resolve) => {
        img.onload =
          async () => {
            const model =
              await mobilenet.load();

            const result =
              await model.classify(
                img
              );

            const labels =
              result.map(
                (item) =>
                  item.className.toLowerCase()
              );

            const wrongObjects = [
              "person",
              "face",
              "book",
              "laptop",
              "computer",
              "monitor",
              "screen",
              "notebook",
              "tie",
              "suit",
            ];

            const invalid =
              labels.some(
                (label) =>
                  wrongObjects.some(
                    (word) =>
                      label.includes(
                        word
                      )
                  )
              );

            resolve(!invalid);
          };
      }
    );
  };

  const validate =
    async () => {
      let newErrors = {};

      // Name
      if (
        !/^[A-Za-z ]+$/.test(
          form.name.trim()
        )
      ) {
        newErrors.name =
          "Enter valid name";
      }

      // Pincode
      if (
        !/^[0-9]{6}$/.test(
          form.pincode
        )
      ) {
        newErrors.pincode =
          "Enter valid pincode";
      }

      // Location
      if (
        !validCities.includes(
          form.location.trim()
        )
      ) {
        newErrors.location =
          "Enter valid city";
      }

      // Description
      const desc =
        form.description.toLowerCase();

      const hasWord =
        wasteWords.some(
          (word) =>
            desc.includes(word)
        );

      if (
        desc.length < 15 ||
        !hasWord
      ) {
        newErrors.description =
          "Enter proper waste complaint";
      }

      // Photo
      if (!form.photo) {
        newErrors.photo =
          "Upload image";
      } else {
        setChecking(true);

        const valid =
          await detectImage(
            form.photo
          );

        setChecking(false);

        if (!valid) {
          newErrors.photo =
            "Wrong image detected. Upload garbage photo only";
        }
      }

      setErrors(newErrors);

      return (
        Object.keys(
          newErrors
        ).length === 0
      );
    };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      const ok =
        await validate();

      if (ok) {
  const id =
    "CS" +
    Math.floor(1000 + Math.random() * 9000);

  const reportData = {
    id: id,
    name: form.name,
    pincode: form.pincode,
    location: form.location,
    description: form.description,
    status: "Pending",
    date: new Date().toLocaleDateString(),
  };

  let oldReports =
    JSON.parse(
      localStorage.getItem("reports")
    ) || [];

  oldReports.push(reportData);

  localStorage.setItem(
    "reports",
    JSON.stringify(oldReports)
  );

  setSuccess(
    "Complaint Submitted ✅ ID: " + id
  );


        setForm({
          name: "",
          pincode: "",
          location: "",
          photo: null,
          description: "",
        });

        setErrors({});
      } else {
        setSuccess("");
      }
    };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h1 style={styles.title}>
          Smart AI Report Page
        </h1>

        <form
          onSubmit={
            handleSubmit
          }
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={
              handleChange
            }
            style={
              styles.input
            }
          />
          <p style={styles.error}>
            {errors.name}
          </p>

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={
              form.pincode
            }
            onChange={
              handleChange
            }
            style={
              styles.input
            }
          />
          <p style={styles.error}>
            {errors.pincode}
          </p>

          <input
            type="text"
            name="location"
            placeholder="City"
            value={
              form.location
            }
            onChange={
              handleChange
            }
            style={
              styles.input
            }
          />
          <p style={styles.error}>
            {errors.location}
          </p>

          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={
              handleChange
            }
            style={
              styles.input
            }
          />
          <p style={styles.error}>
            {errors.photo}
          </p>

          <textarea
            name="description"
            placeholder="Describe issue"
            value={
              form.description
            }
            onChange={
              handleChange
            }
            style={
              styles.textarea
            }
          />
          <p style={styles.error}>
            {
              errors.description
            }
          </p>

          {checking && (
            <p style={styles.check}>
              Detecting image...
            </p>
          )}

          <button
            type="submit"
            style={
              styles.button
            }
          >
            Submit
          </button>

          <p
            style={
              styles.success
            }
          >
            {success}
          </p>
        </form>
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
  },

  box: {
    width: "430px",
    background:
      "white",
    padding: "30px",
    borderRadius:
      "15px",
    boxShadow:
      "0 0 12px rgba(0,0,0,0.15)",
  },

  title: {
    textAlign:
      "center",
    color:
      "#2e7d32",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    borderRadius:
      "8px",
    border:
      "1px solid #ccc",
  },

  textarea: {
    width: "100%",
    height: "90px",
    padding: "12px",
    marginTop: "10px",
    borderRadius:
      "8px",
    border:
      "1px solid #ccc",
    resize: "none",
  },

  button: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    background:
      "#2e7d32",
    color:
      "white",
    border: "none",
    borderRadius:
      "8px",
  },

  error: {
    color: "red",
    fontSize: "13px",
    margin:
      "4px 0",
  },

  success: {
    color:
      "green",
    textAlign:
      "center",
    marginTop: "15px",
    fontWeight:
      "bold",
  },

  check: {
    color:
      "orange",
    textAlign:
      "center",
    marginTop: "10px",
  },
};

export default Report;
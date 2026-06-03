import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match!");
      return;
    }

    setLoading(true);
    setMessage("");

    setTimeout(() => {
      setLoading(false);
      setMessage("✅ Signup successful! Welcome to Clean Sphere.");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-white to-green-100">
      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-4">
          Create an Account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Join Clean Sphere and help keep your city clean 🌍
        </p>

        {message && (
          <p
            className={`text-center mb-4 font-medium ${
              message.startsWith("✅") ? "text-green-700" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            {loading ? "Creating Account..." : "Signup"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-green-700 font-semibold hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
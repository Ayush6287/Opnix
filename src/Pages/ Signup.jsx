import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("FORM SUBMITTED", data);

    if (!data.name || !data.email || !data.password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/signup",
        data
      );

      console.log("SUCCESS RESPONSE:", res.data);

      alert(res.data.msg);

      // optional redirect
      // window.location.href = "/login";

    } catch (err) {
      console.log("FULL ERROR:", err);

      alert(
        err.response?.data?.msg ||
        err.response?.data?.error ||
        "Signup failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-black text-white pt-24">

      <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Full Name"
            value={data.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold disabled:opacity-50"
          >
            {loading ? "Creating..." : "Signup"}
          </button>

        </form>

      </div>
    </div>
  );
}
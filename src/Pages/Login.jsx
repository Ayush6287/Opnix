import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/login",
        data
      );

      localStorage.setItem("token", res.data.token);

      alert("Login successful");
      window.location.href = "/dashboard";

    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="flex items-center text-center h-screen justify-center mb-5 hover:scale-125  flex-col">
  

      <form  className="flex items-center text-center w-2/5 p-10 rounded-2xl  bg-[#1c293c]   flex-col border-4 border-orange-400 "  
      onSubmit={handleSubmit}>
         <h2 className="text-4xl">Login</h2>
        <input className="px-6 py-3 bg-gray-500 rounded-2xl  text-white mt-5 w-2/3 outline  outline-emerald-400"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br /><br />

        <input className="px-6 py-3 bg-gray-500 rounded-2xl  text-white  w-2/3"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br /><br />

        <button className="px-8 py-3 bg-blue-500 rounded-3xl">Login</button>
      </form>
    </div>
  );
}
import React, { useState } from "react";
import {useNavigate,Link} from 'react-router-dom'
import { useAuthContext } from "../context/userContext";
import { toast } from "react-toastify";
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setAdmin} = useAuthContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email==='admin@gmail.com' && password==='admin') {
       setAdmin(true);
       navigate("dashboard");
    }else if (email!=='admin@gmail.com') {
        toast.error("Invalid Email id");
    }else{
        toast.error("Invalid password");
    }
    // Handle login logic here, e.g., sending login request to backend.
    // console.log({ email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Admin Login</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500">
          Forgot Password? <Link to={"/reset"} className="text-blue-600 hover:underline">Reset here</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;

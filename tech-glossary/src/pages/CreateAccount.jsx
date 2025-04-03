import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", { name, email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-800"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center my-4">or</div>
        <button className="w-full flex items-center justify-center bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          <FcGoogle className="mr-2" size={20} /> Login with Google
        </button>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <button
            className="text-gray-700 font-semibold"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;

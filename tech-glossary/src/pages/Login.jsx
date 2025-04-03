import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Logged In:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          New here?{" "}
          <button
            className="text-gray-700 font-semibold"
            onClick={() => navigate("/create-account")}
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;

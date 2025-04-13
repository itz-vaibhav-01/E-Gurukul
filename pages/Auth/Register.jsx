import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",  // default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(formData);

    // API Integration (Later)
    // await axios.post("/api/auth/register", formData);

    navigate("/");  // redirect to Login
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-xl shadow-md w-[300px]"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="w-full p-2 border mb-3 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full p-2 border mb-3 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="w-full p-2 border mb-3 rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <select
          name="role"
          className="w-full p-2 border mb-3 rounded"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="hod">HOD</option>
        </select>

        <button
          type="submit"
          className="bg-green-500 w-full text-white p-2 rounded hover:bg-green-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

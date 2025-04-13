import { useState } from 'react';
import { registerUser } from '../services/authService';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',  // student | faculty | hod
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(formData);
      alert(res.message);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" />
      <select name="role" onChange={handleChange}>
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
        <option value="hod">HOD</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

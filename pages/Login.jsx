import { useState } from 'react';
import { loginUser } from '../services/authService';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      alert("Login Successful");

      // Store Token in LocalStorage
      localStorage.setItem('token', res.token);
      localStorage.setItem('role', res.role);

      // Redirect based on Role
      if (res.role === 'student') {
        window.location.href = '/student/dashboard';
      } else if (res.role === 'faculty') {
        window.location.href = '/faculty/dashboard';
      } else if (res.role === 'hod') {
        window.location.href = '/hod/facerecognition';  // Face Recognition before dashboard
      }

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result.data);

        if (result.data.message === "Success") {
          localStorage.setItem('userId', result.data.user._id);
          const profileImage = result.data.user.profileImage;
          if (profileImage && profileImage.trim() !== '') {
            localStorage.setItem('profileImage', profileImage);
          } else {
            localStorage.setItem('profileImage', "https://i.pravatar.cc/150?img=3");
          }
          navigate('/products');
        } else {
          alert(result.data.message);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 rounded-4" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <i className="bi bi-person-circle fs-1 text-primary"></i>
          <h2 className="fw-bold mt-2">Login to ElviMart</h2>
          <p className="text-muted">Welcome back! Please enter your credentials.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-envelope text-primary"></i>
              </span>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="e.g. you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-lock text-primary"></i>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="form-control"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-semibold shadow-sm">
            Login
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          <small>
            Don’t have an account?{" "}
            <Link to="/register" className="text-decoration-none text-primary fw-semibold">
              Register
            </Link>
          </small>
        </p>
      </div>
    </div>
  );
}

export default Login;

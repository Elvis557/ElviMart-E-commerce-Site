import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import emailjs from 'emailjs-com'; // ✅ Import EmailJS
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);  // State for storing image URL
  const [showPassword, setShowPassword] = useState(false);
  const [uploadMessage, setUploadMessage] = useState(''); // 🌟 New: Upload message
  const navigate = useNavigate();

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'unsigned_uploads'); // Cloudinary preset

      axios.post('https://api.cloudinary.com/v1_1/dhbcccvdj/image/upload', formData)
        .then(response => {
          setProfileImage(response.data.secure_url);  // Save Cloudinary image URL
          setUploadMessage('✅ Profile image uploaded successfully!');
        })
        .catch(error => {
          console.log(error);
          setUploadMessage('❌ Failed to upload image. Please try again.');
        });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log data to check if everything is correct
    console.log("Sending data:", { name, email, password, profileImage });

    // Ensure all fields are filled
    if (!name || !email || !password || !profileImage) {
      alert('Please fill out all fields, including the profile image.');
      return;
    }

    // Sending registration request
    axios.post('http://localhost:3001/register', { name, email, password, profileImage })
      .then(result => {
        console.log('Registration successful:', result);

        // Optionally send email using EmailJS
        emailjs.send(
          'service_p0psnue',
          'template_thlwjqi',
          {
            name: name,
            email: email,
            logo_url: 'https://i.imgur.com/Xzih6t9.png',
          },
          '3Cd20i8ZnHzaWI0Mb'
        )
        .then(() => {
          console.log('Welcome email sent!');
        })
        .catch(err => {
          console.error('Failed to send welcome email:', err);
        });

        navigate('/login');
      })
      .catch(err => {
        console.error('Registration failed:', err.response ? err.response.data : err);
        alert('Registration failed. Please try again.');
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="p-5 rounded-4 shadow-lg"
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          width: '100%',
          maxWidth: '450px',
        }}
      >
        <div className="text-center mb-4">
          <i className="bi bi-person-plus-fill fs-1 text-primary"></i>
          <h2 className="fw-bold mt-2">Create Your ElviMart Account</h2>
          <p className="text-muted">Start your journey with us</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-person text-primary"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-envelope text-primary"></i>
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="you@example.com"
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
                className="form-control"
                placeholder="Create a strong password"
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

          {/* Image upload field */}
          <div className="mb-3">
            <label htmlFor="profileImage" className="form-label fw-semibold">Profile Image</label>
            <input
              type="file"
              className="form-control"
              onChange={handleImageUpload}
              required
            />
            {/* Show success or error message */}
            {uploadMessage && (
              <p style={{ color: uploadMessage.startsWith('✅') ? 'green' : 'red', marginTop: '10px' }}>
                {uploadMessage}
              </p>
            )}
            {/* Preview uploaded image */}
            {profileImage && (
              <img
                src={profileImage}
                alt="Profile"
                style={{ width: '100px', height: '100px', marginTop: '10px', borderRadius: '10px' }}
              />
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-semibold shadow-sm">
            Register
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="text-muted mb-1">Already have an account?</p>
          <Link to="/login" className="btn btn-outline-primary w-100">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;

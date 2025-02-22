import React, { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    identifier: ''
  });
  const [errors, setErrors] = useState([]);

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      identifier: ''
    });
    setErrors([]);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = [];

    if (isLogin) {
      if (!formData.identifier.trim()) {
        newErrors.push('Please enter your email or username');
      }
      if (!formData.password.trim()) {
        newErrors.push('Please enter your password');
      }
    } else {
      if (!formData.email.trim()) {
        newErrors.push('Email is required');
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.push('Invalid email format');
      }

      if (!formData.username.trim()) {
        newErrors.push('Username is required');
      }

      if (!formData.password) {
        newErrors.push('Password is required');
      } else if (formData.password.length < 6) {
        newErrors.push('Password must be at least 6 characters');
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.push('Passwords do not match');
      }
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (isLogin) {
      console.log('Login data:', {
        identifier: formData.identifier,
        password: formData.password
      });
    } else {
      console.log('Signup data:', {
        email: formData.email,
        username: formData.username,
        password: formData.password
      });
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {errors.length > 0 && (
          <div className="error-messages">
            {errors.map((error, index) => (
              <p key={index} className="error">{error}</p>
            ))}
          </div>
        )}

        {!isLogin && (
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {!isLogin && (
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {isLogin && (
          <div className="form-group">
            <label>Email or Username:</label>
            <input
              type="text"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {!isLogin && (
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <button type="submit" className="submit-btn">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <button onClick={toggleMode} className="toggle-btn">
        {isLogin ? 'Create new account' : 'Already have an account? Login'}
      </button>
    </div>
  );
};

export default AuthForm; // Default export
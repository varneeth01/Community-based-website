import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('/auth/api/register', { email, password });
      console.log(response.data.message);
      // Handle successful registration
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const response = await axios.get('/auth/GoogleAuth');
      // Handle Google registration response
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFacebookRegister = async () => {
    try {
      const response = await axios.get('/auth/api/facebook/register');
      // Handle Facebook registration response
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={() => router.push('/landingpage')}>Register</button>
      </form>
      <button onClick={handleGoogleSignUp}>Google Register</button>
      <button onClick={handleFacebookRegister}>Facebook Register</button>
    </div>
  );
};

export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '/styles/login.module.css';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/api/login', { email, password });
      console.log(response.data.message);
      console.log(response.data.token);
      // Save the token in localStorage or cookies
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await axios.get('/auth/GoogleAuth');
      // Handle Google login response
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const response = await axios.get('/auth/api/facebook');
      // Handle Facebook login response
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.shape}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} clasName={styles.form}>
        <div>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={styles.button} type="submit"  onClick={() => router.push('/landingpage')}>Login</button>
      </form>
        <div className={styles.social}>
      <button className={styles.button}  onClick={handleGoogleLogin}>Google Login</button>
      <button className={styles.button} onClick={handleFacebookLogin}>Facebook Login</button>
        </div>
    </div>
  </div>
  );
};

export default Login;

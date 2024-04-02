import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleAuth = ({ onSuccess, onFailure, isSignUp }) => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const handleGoogleResponse = (response) => {
    const { tokenId, profileObj } = response;
    const { email, name } = profileObj;

    const data = {
      email,
      name,
      tokenId,
    };

    if (isSignUp) {
      // Handle Google sign-up
      onSuccess(data, 'google');
    } else {
      // Handle Google login
      onSuccess(data, 'google');
    }
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText={isSignUp ? 'Sign up with Google' : 'Login with Google'}
      onSuccess={handleGoogleResponse}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleAuth;

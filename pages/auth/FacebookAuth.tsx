
import React from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookAuth = ({ onSuccess, onFailure, isSignUp }) => {
  const appId = process.env.REACT_APP_FACEBOOK_APP_ID;

  const handleFacebookResponse = (response) => {
    const { email, name, accessToken } = response;

    const data = {
      email,
      name,
      accessToken,
    };

    if (isSignUp) {
      // Handle Facebook sign-up
      onSuccess(data, 'facebook');
    } else {
      // Handle Facebook login
      onSuccess(data, 'facebook');
    }
  };

  return (
    <FacebookLogin
      appId={appId}
      fields="name,email"
      callback={handleFacebookResponse}
      onFailure={onFailure}
      textButton={isSignUp ? 'Sign up with Facebook' : 'Login with Facebook'}
    />
  );
};

export default FacebookAuth;

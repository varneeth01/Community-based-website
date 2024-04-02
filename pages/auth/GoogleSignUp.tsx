import React from 'react';
import GoogleAuth from './GoogleAuth';

const GoogleSignUp = ({ onSuccess, onFailure }) => {
  return (
    <div>
      <h2>Sign Up with Google</h2>
      <GoogleAuth onSuccess={onSuccess} onFailure={onFailure} isSignUp />
    </div>
  );
};

export default GoogleSignUp;

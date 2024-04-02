import React from 'react';
import GoogleAuth from './GoogleAuth';

const GoogleLogin = ({ onSuccess, onFailure }) => {
  return (
    <div>
      <h2>Login with Google</h2>
      <GoogleAuth onSuccess={onSuccess} onFailure={onFailure} />
    </div>
  );
};

export default GoogleLogin;

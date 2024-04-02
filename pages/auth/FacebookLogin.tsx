import React from 'react';
import FacebookAuth from './FacebookAuth';

const FacebookLogin = ({ onSuccess, onFailure }) => {
  return (
    <div>
      <h2>Login with Facebook</h2>
      <FacebookAuth onSuccess={onSuccess} onFailure={onFailure} />
    </div>
  );
};

export default FacebookLogin;

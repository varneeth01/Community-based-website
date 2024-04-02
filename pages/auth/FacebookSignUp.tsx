import React from 'react';
import FacebookAuth from './FacebookAuth';

const FacebookSignUp = ({ onSuccess, onFailure }) => {
  return (
    <div>
      <h2>Sign Up with Facebook</h2>
      <FacebookAuth onSuccess={onSuccess} onFailure={onFailure} isSignUp />
    </div>
  );
};

export default FacebookSignUp;

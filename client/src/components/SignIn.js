import React from 'react';
import { Button } from '@material-ui/core';

const SignIn = () => {
  
  const googleLogin = () => {
    window.open(`${process.env.REACT_APP_SERVER_DOMAIN}auth/google/callback`, "_self");
  }

  return (
    <div>
      <h2>Sign In with Google</h2>
      <Button variant="contained" color="primary" onClick={googleLogin}>
        Sign In with Google
      </Button>
    </div>
  );
};

export default SignIn;

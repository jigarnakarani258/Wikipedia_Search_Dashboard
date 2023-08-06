import React from "react";
import { Button } from "@material-ui/core";
import googleImage from "./../assets/google.png";
import "./../styles/SignIn.css"; // Import the CSS file

const SignIn = () => {
  const googleLogin = () => {
    window.open(
      `${process.env.REACT_APP_SERVER_DOMAIN}auth/google/callback`,
      "_self"
    );
  };

  return (
    <div className="container">
      <img className="google-image" src={googleImage} alt="Google" />
      <h2>Sign In with Google</h2>
      <Button
        className="custom-button"
        variant="contained"
        color="primary"
        onClick={googleLogin}
      >
        Sign In with Google
      </Button>
    </div>
  );
};

export default SignIn;

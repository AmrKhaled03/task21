import React from 'react';
import { Button } from 'react-bootstrap';
import firebase from '../firebase';
import "../styles.css";

const Login = () => {
  const handleAppleLogin = async () => {
    // Implement Apple login here
    const providerApp = new firebase.auth.OAuthProvider('apple.com');
    try {
      await firebase.auth().signInWithPopup(providerApp);

  
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    // Implement Google login here
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2 className='text-center m-5'>Login</h2>
      <div className="group d-flex flex-column justify-content-center align-items-center">
      <Button variant="dark"  className="w-50 text-center"onClick={handleAppleLogin}>
        Login with Apple
      </Button>
      <Button variant="primary" className="w-50"onClick={handleGoogleLogin}>
        Login with Google
      </Button>    
      </div>
    <h1 className='text-center m-5'>
        OR
    </h1>
    </div>
  );
};

export default Login;

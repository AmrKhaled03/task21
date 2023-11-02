import React from "react";
import firebase from "../firebase";
import "../styles.css";

const SocialAuth = () => {
  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      // Handle successful Google login (e.g., redirect to the dashboard)
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleAppleSignIn = async () => {
    const appleProvider = new firebase.auth.OAuthProvider("apple.com");
    try {
      // Set the scope of the Apple Sign-In to include the user's email.
      appleProvider.addScope("email");

      await firebase.auth().signInWithPopup(appleProvider);
      // Handle successful Apple Sign-In (e.g., redirect to the dashboard)
    } catch (error) {
      console.error("Error signing in with Apple:", error);
    }
  };
  

  return (
    <div>
      <button className="btn btn-danger" onClick={handleGoogleSignIn}>
        Sign in with Google
      </button>
      <button className="btn btn-dark" onClick={handleAppleSignIn}>
        Sign in with Apple
      </button>
    </div>
  );
};

export default SocialAuth;

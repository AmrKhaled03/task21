import React from 'react';
import firebase from '../firebase';

const Hello = ({ user }) => {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h2>Hello, {user.displayName || user.email}!</h2>
      <p>Welcome to the Hello page. You are logged in!</p>
      <button  className='btn btn-danger w-50' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Hello;

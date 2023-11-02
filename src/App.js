import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Hello from './components/Hello';
import firebase from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [user, setUser] = useState(null);

  // Listen for changes in the user authentication state
  firebase.auth().onAuthStateChanged((currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser(null);
    }
  });

  return (
    <div>
      <h1 className='text-center m-5'>Authentication System</h1>
      {user ? (
        <Hello user={user} />
      ) : (
        <>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
};

export default App;




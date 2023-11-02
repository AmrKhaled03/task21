import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import firebase from '../firebase';
import "../styles.css";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailRegister = async () => {
    // Implement email & password registration here
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2 className='text-center m-5'>Register</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" onClick={handleEmailRegister}>
          Register with Email & Password
        </Button>
      </Form>
    </div>
  );
};

export default Register;

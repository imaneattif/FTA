import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Simulate an API call for user registration
  const mockRegisterApiCall = (userInfo) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Here we're mocking a successful registration
        // In a real scenario, you would make an actual HTTP request to your server
        if (userInfo.email && userInfo.password.length >= 6) {
          resolve({ message: 'Registration successful', user: userInfo });
        } else {
          reject(new Error('Error in registration'));
        }
      }, 1000);
    });
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    if (!name || !email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    try {
      const response = await mockRegisterApiCall({ name, email, password });
      setIsLoading(false);
      // Here you would handle the successful registration, e.g., storing the user data
      console.log(response);
      // Redirect to login page or directly log in the user after registration
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '320px', margin: 'auto', paddingTop: '50px' }}>
      <h2>Register</h2>
      <Form onSubmit={handleRegistration}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? 'Registering…' : 'Register'}
        </Button>
      </Form>
    </div>
  );
};

export default Register;

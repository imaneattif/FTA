import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Simulate an API call
  const mockLoginApiCall = (credentials) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email === "user@example.com" && credentials.password === "password123") {
          resolve({ message: 'Login successful', token: 'fake-jwt-token' });
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    try {
      const response = await mockLoginApiCall({ email, password });
      setIsLoading(false);
      // Here you would handle the successful login, like storing the token
      console.log(response);
      // Redirect to dashboard or other page after login
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '320px', margin: 'auto', paddingTop: '50px' }}>
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in…' : 'Log In'}
        </Button>
      </Form>
    </div>
  );
};

export default Login;

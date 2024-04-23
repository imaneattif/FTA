import React, { useState, useEffect } from 'react';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';

const UserProfile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    joinDate: '',
    // Add other profile fields here as needed
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // This is where you'd fetch the user's profile data from the API.
    // For now, we'll use mocked data and simulate a delay to fetch data.
    const fetchProfileData = async () => {
      try {
        const mockData = await new Promise((resolve) => 
          setTimeout(() => resolve({
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            joinDate: 'January 1, 2022',
            // Include additional mock data fields as necessary
          }), 1000)
        );
        setProfileData(mockData);
        setIsLoading(false);
      } catch (error) {
        setError('Failed to load profile data.');
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (isLoading) {
    return <p>Loading profile...</p>; // Or a spinner component
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>; // Make sure to import Alert from 'react-bootstrap'
  }

  return (
    <Container>
      <Card>
        <Card.Header>Profile</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Name: {profileData.name}</ListGroup.Item>
            <ListGroup.Item>Email: {profileData.email}</ListGroup.Item>
            <ListGroup.Item>Join Date: {profileData.joinDate}</ListGroup.Item>
            {/* Render additional profile data here */}
          </ListGroup>
          {/* The button below can be used in the future to trigger a modal or form for editing the profile */}
          <Button variant="primary" onClick={() => {/* Placeholder for edit profile functionality */}}>
            Edit Profile
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserProfile;

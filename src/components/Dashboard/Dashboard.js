import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { fetchData } from '../../utils/fetchData'; // Use destructured import for named export

const Dashboard = () => {
  const [userData, setUserData] = useState({
    recentWorkouts: [],
    goals: {},
    progress: {},
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData('/api/dashboard');
        setUserData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Dashboard fetch error:', error);
        setError('Failed to fetch data.'); // Optionally, append error message details
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>; // Optionally, you can add a spinner here
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <Container>
      <h1>Dashboard</h1>
      <Row>
        <Col sm={12} md={6}>
          <Card>
            <Card.Header>Recent Workouts</Card.Header>
            <ListGroup variant="flush">
              {userData.recentWorkouts.map((workout, index) => (
                <ListGroup.Item key={index}>{workout.name}</ListGroup.Item> // Assuming workouts have a name property
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <Card.Header>Goals</Card.Header>
            <Card.Body>
              <p>Daily Calorie Goal: {userData.goals.dailyCalories}</p>
              <p>Weekly Workout Goal: {userData.goals.weeklyWorkouts}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;


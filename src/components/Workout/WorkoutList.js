import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WorkoutCard from './WorkoutCard';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // This is where you'd make a fetch call to your API
    // For now, we'll simulate fetching data with a delay and mock data
    const fetchWorkouts = async () => {
      try {
        const mockWorkouts = await new Promise((resolve) => 
          setTimeout(() => resolve([
            { id: 1, name: 'Morning Run', type: 'Cardio', duration: 30, description: 'A quick morning run to boost your energy', imageUrl: 'path/to/morning-run.jpg' },
            { id: 2, name: 'Weight Lifting', type: 'Strength', duration: 45, description: 'Intense session to build muscle strength', imageUrl: 'path/to/weight-lifting.jpg' },
            // Add more mock workouts as needed
          ]), 1000)
        );
        setWorkouts(mockWorkouts);
        setIsLoading(false);
      } catch (error) {
        setError('Failed to load workouts.');
        setIsLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (isLoading) {
    return <p>Loading workouts...</p>; // You might want to use a spinner or a skeleton here
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <Container>
      <h2>Workouts</h2>
      <Row>
        {workouts.map((workout) => (
          <Col key={workout.id} sm={12} md={6} lg={4}>
            <WorkoutCard workout={workout} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WorkoutList;

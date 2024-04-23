import React from 'react';
import { Card, Button } from 'react-bootstrap';

// WorkoutCard component expects a workout prop, which is an object containing details about the workout
const WorkoutCard = ({ workout }) => {
  return (
    <Card style={{ width: '18rem', marginBottom: '1rem' }}>
      <Card.Img variant="top" src={workout.imageUrl} />
      <Card.Body>
        <Card.Title>{workout.name}</Card.Title>
        <Card.Text>
          Type: {workout.type}
        </Card.Text>
        <Card.Text>
          Duration: {workout.duration} minutes
        </Card.Text>
        <Card.Text>
          {workout.description}
        </Card.Text>
        <Button variant="primary" onClick={() => alert('Start Workout!')}>
          Start Workout
        </Button>
      </Card.Body>
    </Card>
  );
};

export default WorkoutCard;


import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';

// Define a validation schema using yup
const WorkoutSchema = Yup.object().shape({
  name: Yup.string().required('Workout name is required'),
  type: Yup.string().required('Workout type is required'),
  duration: Yup.number().positive('Duration must be positive').required('Duration is required'),
  description: Yup.string().required('Description is required'),
});

const WorkoutForm = ({ workout, onSubmit }) => {
  // If workout prop is passed, it means we are editing an existing workout
  // If workout prop is not passed, we are creating a new workout

  // Initial values for our form, based on the workout prop
  const initialValues = {
    name: workout ? workout.name : '',
    type: workout ? workout.type : '',
    duration: workout ? workout.duration : '',
    description: workout ? workout.description : '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={WorkoutSchema}
      onSubmit={(values, actions) => {
        onSubmit(values); // You would pass this function from the parent component
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">Workout Name</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" component="div" className="alert alert-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="type">Workout Type</label>
            <Field name="type" as="select" className="form-control">
              <option value="">Select a type</option>
              <option value="Cardio">Cardio</option>
              <option value="Strength">Strength</option>
              <option value="Flexibility">Flexibility</option>
              <option value="Balance">Balance</option>
            </Field>
            <ErrorMessage name="type" component="div" className="alert alert-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration (in minutes)</label>
            <Field name="duration" type="number" className="form-control" />
            <ErrorMessage name="duration" component="div" className="alert alert-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field name="description" as="textarea" className="form-control" />
            <ErrorMessage name="description" component="div" className="alert alert-danger" />
          </div>

          <Button variant="primary" type="submit" disabled={isSubmitting}>
            {workout ? 'Update Workout' : 'Add Workout'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default WorkoutForm;


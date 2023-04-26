import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserMutation } from '../services/userServiceApi';

const AddUser = () => {
  const [user, setUser] = useState({
    title: '',
    firstname: '',
    lastname: '',
    power: '',
    city: '',
  });

  const [createUser] = useCreateUserMutation();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user);
    navigate('/');
  };

  return (
    <Container>
      <h1>Add New User</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>User Title</Form.Label>
          <Form.Control
            type="text"
            value={user.title}
            onChange={(e) => setUser({ ...user, title: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>FirstName</Form.Label>
          <Form.Control
            type="text"
            value={user.firstname}
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            value={user.lastname}
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Power</Form.Label>
          <Form.Control
            type="text"
            value={user.power}
            onChange={(e) => setUser({ ...user, power: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            value={user.city}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddUser;

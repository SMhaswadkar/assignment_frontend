import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from '../services/userServiceApi';

const EditUser = () => {
  const { id } = useParams();

  const { currentData } = useGetUserQuery(id);
  const [updateUser] = useUpdateUserMutation();

  const [editUser, setEditUser] = useState({
    title: '',
    firstname: '',
    lastname: '',
    power: '',
    city: '',
  });

  useEffect(() => {
    setEditUser(currentData?.data);
  }, [currentData?.data]);

  const navigate = useNavigate();

  const handleEditSubmit = (e) => {
    e.preventDefault();

    updateUser(editUser);

    navigate('/');
  };

  return (
    <Container>
      <Form onSubmit={handleEditSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Edit User Title</Form.Label>
          <Form.Control
            type="text"
            value={editUser?.title || ''}
            onChange={(e) =>
              setEditUser({ ...editUser, title: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Edit FirstName</Form.Label>
          <Form.Control
            type="text"
            value={editUser?.firstname || ''}
            onChange={(e) =>
              setEditUser({ ...editUser, firstname: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Edit Lastname</Form.Label>
          <Form.Control
            type="text"
            value={editUser?.lastname || ''}
            onChange={(e) =>
              setEditUser({ ...editUser, lastname: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Edit Power</Form.Label>
          <Form.Control
            type="text"
            value={editUser?.power || ''}
            onChange={(e) =>
              setEditUser({ ...editUser, power: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Edit City</Form.Label>
          <Form.Control
            type="text"
            value={editUser?.city || ''}
            onChange={(e) => setEditUser({ ...editUser, city: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default EditUser;

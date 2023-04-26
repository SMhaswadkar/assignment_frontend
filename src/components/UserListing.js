import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from '../services/userServiceApi';

const UserListing = () => {
  const { data } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  const navigate = useNavigate();

  const deleteUserData = (id) => {
    deleteUser(id);
    navigate('/');
  };

  return (
    <Container>
      <div>
        <h1 style={{ display: 'inline-block' }}>Users MongoDB App</h1>
        <Link to="/add-user">
          <Button className="btn btn-primary">Add New User</Button>
        </Link>
      </div>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>FirstName</th>
            <th>Lastname</th>
            <th>City</th>
            <th>Power</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((user, index) => (
            <>
              <tr key={index}>
                <td>{user?._id}</td>
                <td>{user?.title}</td>
                <td>{user?.firstname}</td>
                <td>{user?.lastname}</td>
                <td>{user?.city}</td>
                <td>{user?.power}</td>
                <td>
                  <Link to={`/edit-user/${user?._id}`}>
                    <Button>Edit</Button>
                  </Link>
                </td>
                <td>
                  <Button
                    onClick={() => deleteUserData(user?._id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserListing;

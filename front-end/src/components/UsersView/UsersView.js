import React, { useEffect, useState } from 'react';
import userService from '../../services/users';
import User from './User';

const UsersView = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () =>
    userService
      .getAll()
      .then((result) => {
        setUsers(result);
      })
      .catch((err) => {
        console.log('something went wrong!');
        console.log(err);
      });

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <hr />
      <div>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersView;

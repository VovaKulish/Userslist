import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';

import './user.css';

const User = ({ user }) => {
  return (
    <div className="user-preview">
      <ListItemText className="user-id">
        ID: {user.id.value}
      </ListItemText>
      <ListItemText className="user-firstname">
        First Name: {user.name.first}
      </ListItemText>
      <ListItemText className="user-lastname">
        Last Name: {user.name.last}
      </ListItemText>
    </div>
  );
};

export default User;

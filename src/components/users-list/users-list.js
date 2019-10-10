import React from 'react';
import User from '../user';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import './users-list.css';

const UsersList = ({ users, error, selectUser }) => {
  if (error) {
    return <p>{error.message}</p>;
  }
  const elements = users.map((user) => {
    const id = user.id.value;

    return (
    <ListItem key={ id } onClick={()=>selectUser(user)} className="list-group-item" button>
      <User user={ user } />
    </ListItem>
    );
  });

  return (
    <aside className="container content">
      <article>
        <h1>Users:</h1>
          <List className="users-list list-group" component="nav" aria-label="main mailbox folders">
            { elements }
          </List>
      </article>
    </aside>
    );
};

export default UsersList;
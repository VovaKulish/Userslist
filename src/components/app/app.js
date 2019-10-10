import React, { Component } from 'react';

import UsersList from '../users-list';
import UsersDetails from '../users-details';

import Header from '../header';

import './app.css';

class App extends Component {
  state = {
    users: [],
    selectedUser: null,
    error: null,
  };

  componentDidMount() {
    fetch('https://api.randomuser.me/1.0/?results=20&nat=us,us&inc=gender,id,name,location,email,phone,dob')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(users => this.setState( {users : users.results} ))
      .catch(error => this.setState( {error} ));
  }


  selectUser (selectedUser) {
    this.setState({ selectedUser: selectedUser });
  }

  render() {
    const users = this.state.users;
    const selectedUser = this.state.selectedUser;

    return (
      <div className="users-list-app">
        <Header/>
        <div class="flex-wrapper">
          <UsersList users={users} selectUser={this.selectUser.bind(this)} />
          <UsersDetails user={selectedUser}/>
        </div>
      </div>
    );
  }
}
export default App;
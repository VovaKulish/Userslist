import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './users-details.css';

const UsersDetails = ({ user }) => {
 if (user === null) return (
    <p className="user-unpicked"> Pick a User to see details</p>
  );

  const userBirthDate = new Date(user.dob * 1000).toString();

  return (
    <Card className="user">
        <CardContent>
          <Typography className="user-gender">
            Gender: {user.gender}
          </Typography>
          <Typography className="user-phone">
            Phone: {user.phone}
          </Typography>
          <Typography className="user-email">
            Email: {user.email}
          </Typography>
          <Typography className="user-dob">
            Date of birth: {userBirthDate}
          </Typography>
          <Typography className="user-location">
            State: {user.location.state}
            <br/>
            City: {user.location.street}
            <br/>
            Street: {user.location.city}
          </Typography>
        </CardContent>
    </Card>
  );
};

export default UsersDetails;
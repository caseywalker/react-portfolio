import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import { signInUser, signOutUser } from '../helpers/auth';

export default function Login() {
  return (
    <div>
      <Card>
      <Card.Content extra>
      <Card.Header>Please log in</Card.Header>
        <div className='ui two buttons'>
          <Button color='green' onClick={signInUser}>
            Sign In
          </Button>
          <Button color='red' onClick={signOutUser}>
            Sign Out
          </Button>
        </div>
      </Card.Content>
    </Card>
    </div>
  );
}

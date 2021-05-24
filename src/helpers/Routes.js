import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';

function Routes() {
  return (
    <div>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default Routes;

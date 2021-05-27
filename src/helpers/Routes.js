import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Login from '../views/Login';
import AdminProjects from '../views/AdminProjects';

const AdminRoute = ({ component: Component, admin, ...rest }) => {
  if (admin === null) {
    return 'loading';
  }
  const routeChecker = (attributes) => (admin
    ? (<Component {...attributes} admin={admin} />)
    : (<Redirect to={{ pathname: '/', state: { from: attributes.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

AdminRoute.propTypes = {
  component: PropTypes.func,
  admin: PropTypes.any
};

function Routes({ admin }) {
  return (
    <div>
      <Switch>
        <AdminRoute
        admin={admin}
        exact path='/admin-projects'
        component={() => <AdminProjects admin={admin} />}
        />
        <Route exact path='/admin' component={Login} />
        <Route exact path='/' component={() => <Home />} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  admin: PropTypes.any
};

export default Routes;

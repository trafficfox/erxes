import * as React from 'react';
import { Route } from 'react-router-dom';
import { Plans } from './containers';

const routes = () => (
  <Route exact={true} path="/settings/plans/" component={Plans} />
);

export default routes;

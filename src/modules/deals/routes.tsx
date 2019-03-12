import queryString from 'query-string';
import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Insights } from './components';
import { Home } from './containers';

const deals = () => {
  return <Redirect to="/deals/board" />;
};

const boards = ({ history, location }) => {
  const queryParams = queryString.parse(location.search);

  return <Home queryParams={queryParams} history={history} />;
};

const routes = () => {
  return (
    <React.Fragment>
      <Route key="deals" exact={true} path="/deals" render={deals} />

      <Route
        key="deals/board"
        exact={true}
        path="/deals/board"
        component={boards}
      />
      <Route key="deals/insights" path="/deals/insights" component={Insights} />
    </React.Fragment>
  );
};

export default routes;

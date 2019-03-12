import * as React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Lost from './Lost';
import Started from './Started';
import Volume from './Volume';
import Won from './Won';

class Insights extends React.Component<{ match: any }> {
  render() {
    const { match } = this.props;
    return (
      <>
        <NavLink to={`${match.url}/volume`}>Deals volume report</NavLink>
        <NavLink to={`${match.url}/started`}>Deals started report</NavLink>
        <NavLink to={`${match.url}/won`}>Deals won report</NavLink>
        <NavLink to={`${match.url}/lost`}>Deals lost report</NavLink>

        <Route path={`${match.path}/volume`} component={Volume} />
        <Route path={`${match.path}/started`} component={Started} />
        <Route path={`${match.path}/won`} component={Won} />
        <Route path={`${match.path}/lost`} component={Lost} />
      </>
    );
  }
}

export default Insights;

import { Wrapper } from 'modules/layout/components';
import { SidebarList } from 'modules/layout/styles';
import * as React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import Lost from './Lost';
import Started from './Started';
import Volume from './Volume';
import Won from './Won';

class Insights extends React.Component<{ match: any }> {
  render() {
    const { match } = this.props;
    return (
      <Wrapper
        leftSidebar={
          <Wrapper.Sidebar>
            <Wrapper.Sidebar.Section>
              <SidebarList>
                <NavLink to={`${match.url}/volume`}>
                  Deals volume report
                </NavLink>
                <NavLink to={`${match.url}/started`}>
                  Deals started report
                </NavLink>
                <NavLink to={`${match.url}/won`}>Deals won report</NavLink>
                <NavLink to={`${match.url}/lost`}>Deals lost report</NavLink>
              </SidebarList>
            </Wrapper.Sidebar.Section>
          </Wrapper.Sidebar>
        }
        content={
          <>
            <Route
              exact={true}
              path={`${match.path}/`}
              // tslint:disable-next-line:jsx-no-lambda
              render={() => <Redirect to={`${match.path}/volume`} />}
            />
            <Route path={`${match.path}/volume`} component={Volume} />
            <Route path={`${match.path}/started`} component={Started} />
            <Route path={`${match.path}/won`} component={Won} />
            <Route path={`${match.path}/lost`} component={Lost} />
          </>
        }
      />
    );
  }
}

export default Insights;

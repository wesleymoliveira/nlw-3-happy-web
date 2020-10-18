import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//import {useAuth} from './contexts/auths';

import Landing from './pages/Landing';
import OrphanagesMaps from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import Orphanagecreated from './pages/OrphanageCreated';
import Login from './pages/Login';

/* interface IProps {
  component: Route;
}
 */

/* const { signed, signIn } = useAuth();
const PrivateRoute =({ component: Component, ...rest }: IProps ) => (
  <Route {...rest} render ={props => (
    (signed) ? (
      <Component { ... props } />
    ) : (
      <Redirect to ={{ pathname: "/login", state: { from: props.location } }} />
    )
  )

  } />
) */
{/* <PrivateRoute path="/orphanages/create" component={Orphanagecreated} /> */}

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" component={OrphanagesMaps} />
        <Route path="/ok" component={Orphanagecreated} />
        <Route path="/login" component={Login} /> 
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
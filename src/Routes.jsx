import React from 'react';
import {
  Route,
  useLocation,
  Routes as Switch,
  Navigate as Redirect,
} from 'react-router-dom';

import VerifyInsurance from './pages/VerifyInsurance';

function Routes() {
  const routes = [
    {
      path: '/verify/:encodedData',
      render: VerifyInsurance,
    },
  ];

  const location = useLocation();
  return (
    <Switch location={location} key={location.pathname}>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={(
            <route.render />
          )}
        />
      ))}
      <Route path="*" element={<Redirect replace to="/" />} />
    </Switch>
  );
}

export default Routes;

import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './page/home';

export const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact={true} path='/' component={HomePage} />
        </Switch>
      </HashRouter>
    </>
  );
};

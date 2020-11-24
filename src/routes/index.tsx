import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import About from '../pages/About/index';
import Work from '../pages/Work/index';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/work" component={Work} />
  </Switch>
);

export default Routes;

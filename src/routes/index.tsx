import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import About from '../pages/About/index';
import Work from '../pages/Work/index';
import Project from '../pages/Project/index';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/work" component={Work} />
    <Route path="/project" component={Project} />
  </Switch>
);

export default Routes;

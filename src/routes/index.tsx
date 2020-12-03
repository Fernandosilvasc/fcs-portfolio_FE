import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import About from '../pages/About/index';
import Work from '../pages/Work/index';
import Project from '../pages/Project/index';
import Contact from '../pages/Contact/index';
import GitHubFeeds from '../pages/GitHubFeeds/index';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/work" component={Work} />
    <Route path="/project" component={Project} />
    <Route path="/contact" component={Contact} />
    <Route path="/githubFeeds" component={GitHubFeeds} />
  </Switch>
);

export default Routes;

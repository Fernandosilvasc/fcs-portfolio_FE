import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ProjectProvider } from '../hooks/Projects';

import Home from '../pages/Home/index';
import About from '../pages/About/index';
import Work from '../pages/Work/index';
import Project from '../pages/Project/index';
import Contact from '../pages/Contact/index';
import GitHubFeeds from '../pages/GitHubFeeds/index';

const Routes: React.FC = () => (
  <ProjectProvider>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/project/:project+" component={Project} />
      <Route path="/contact" component={Contact} />
      <Route path="/githubFeeds" component={GitHubFeeds} />
    </Switch>
  </ProjectProvider>
);

export default Routes;

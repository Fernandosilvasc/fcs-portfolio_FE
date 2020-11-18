import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sidebar from '../components/Sidebar/index';
import InfoCard from '../components/InfoCard/index';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Sidebar} />
    <Route path="/home" component={InfoCard} />
  </Switch>
);

export default Routes;

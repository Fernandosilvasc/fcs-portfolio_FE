import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Sidebar from '../components/Sidebar/index';
// import InfoCard from '../components/InfoCard/index';
import Home from '../pages/Home/index';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route path="/home" component={InfoCard} props="contact" /> */}
  </Switch>
);

export default Routes;

import React from 'react';

import { Container, CardDescription, Header } from './styles';

import Sidebar from '../../components/Sidebar/index';
import InfoCard from '../../components/InfoCard/index';

const Work: React.FC = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <InfoCard />
        <CardDescription>
          <Header>
            <div />
            <h2>
              <span>Recent </span>
              Works
            </h2>
          </Header>
        </CardDescription>
      </Container>
    </>
  );
};

export default Work;

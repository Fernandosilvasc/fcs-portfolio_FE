import React from 'react';
import { Container } from './styles';

import NavBar from '../../../components/NavBar/Portable/index';
import InfoCard from '../../../components/InfoCard/Portable/index';
import Header from '../../../components/Header/index';
import Footer from '../../../components/Footer/index';

const WorkPortable: React.FC = () => {
  return (
    <>
      <Container>
        <NavBar />
        <InfoCard title="work" />
        <Header boldTitle="Recent" title="Works" />
      </Container>
      <Footer />
    </>
  );
};

export default WorkPortable;

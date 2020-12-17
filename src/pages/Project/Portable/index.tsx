import React from 'react';
import { Container } from './styles';

import NavBar from '../../../components/NavBar/Portable/index';
import Header from '../../../components/Header/index';
import Footer from '../../../components/Footer/index';

const ProjectPortable: React.FC = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Header boldTitle="CurrentProject" title="" />
      </Container>
      <Footer />
    </>
  );
};

export default ProjectPortable;

import React from 'react';
import { Container } from './styles';

import NavBar from '../../../components/NavBar/Portable/index';
import InfoCard from '../../../components/InfoCard/Portable/index';
import Header from '../../../components/Header/index';
import Footer from '../../../components/Footer/index';

const ContactPortable: React.FC = () => {
  return (
    <>
      <Container>
        <NavBar />
        <InfoCard title="contact" />
        <Header boldTitle="Contact" title="Me" />
      </Container>
      <Footer />
    </>
  );
};

export default ContactPortable;

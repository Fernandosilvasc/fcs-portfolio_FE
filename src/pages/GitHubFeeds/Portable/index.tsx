import React from 'react';
import { Container } from './styles';

import NavBar from '../../../components/NavBar/Portable/index';
import InfoCard from '../../../components/InfoCard/Portable/index';
import Header from '../../../components/Header/index';
import Footer from '../../../components/Footer/index';

const GitHubFeedsPortable: React.FC = () => {
  return (
    <>
      <Container>
        <NavBar />
        <InfoCard title="githubFeeds" />
        <Header boldTitle="GitHub" title="Feeds" />
      </Container>
      <Footer />
    </>
  );
};

export default GitHubFeedsPortable;

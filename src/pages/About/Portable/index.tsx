import React from 'react';
import { Container, CardDescription, Content } from './styles';

import NavBar from '../../../components/NavBar/Portable/index';
import InfoCard from '../../../components/InfoCard/Portable/index';
import Header from '../../../components/Header/index';
import Footer from '../../../components/Footer/index';
import { ReactComponent as Illustration } from '../../../assets/illustration.svg';

const AboutPortable: React.FC = () => {
  return (
    <>
      <Container>
        <NavBar />
        <InfoCard title="about" />
        <Header boldTitle="About" title="Me" />

        <CardDescription>
          <Content>
            <div>
              <p>
                Over 15 years I built a career focused on productivity, quality,
                and intercommunication, which provided me great experiences and
                immense learning.
              </p>
              <p>
                Today I am redirecting my focus to Web development, where I am
                currently working with #NodeJS, #React, #ReactNative and other
                tools that help in the development of this environment.
              </p>
            </div>
            <Illustration />
          </Content>
        </CardDescription>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPortable;

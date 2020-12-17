import React from 'react';
// import Media from 'react-media';

import { Container, CardDescription, Header, Content } from './styles';

import NavBar from '../../../components/NavBar/Desktop/index';
import InfoCard from '../../../components/InfoCard/Desktop/index';
import Footer from '../../../components/Footer/index';
import { ReactComponent as Illustration } from '../../../assets/illustration.svg';

const AboutDesktop: React.FC = () => {
  return (
    <>
      <Container>
        <NavBar />
        <InfoCard title="about" />
        <CardDescription>
          <Header>
            <div />
            <h2>
              <span>About </span>
              Me
            </h2>
          </Header>
          <Content>
            <div>
              <p>
                Over 15 years I built a career focused on productivity, quality,
                and intercommunication, which provided me great experiences and
                immense learning.
              </p>
              <p>
                Today I am redirecting my focus to Web development, where I am
                currently dealing with #NodeJS, #React, #ReactNative and other
                tools that help in the development of this environment.
              </p>
              {/* <Media query={{ maxWidth: 600 }}>
                {matches => (matches ? <p>test 1</p> : <Illustration />)}
              </Media> */}
            </div>
            <Illustration />
          </Content>
        </CardDescription>
      </Container>
      <Footer />
    </>
  );
};

export default AboutDesktop;

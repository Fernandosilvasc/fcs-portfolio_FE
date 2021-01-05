import React from 'react';

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
                Full-stack web developer with a background in quality assurance
                and production engineering. My background has provided me with
                high-quality coding skills and a natural understanding of
                software development cycles.
              </p>
              <p>
                My thorough enjoyment of working on backend technologies has
                given me the ability to quickly read and understand existing
                code and systems.
              </p>
              <p>
                I’d love to leverage my knowledge gained thus far and continue
                to rapidly grow in tech and work collaboratively in a team to
                deliver excellent results.
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

export default AboutDesktop;

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
                Full-stack web Developer and technology enthusiast who loves the
                challenge of understanding and working with complex systems. I
                have worked in a wide range of areas, from coding to working
                efficiently with remote teams in an Agile/Scrum environment.
              </p>
              <p>
                Also, I have experience in building web applications using
                languages and tools such as JavaScript/Typescript, Node.js,
                Firebase, HTML, CSS, MySQL, GraphQL, React, and React Native.
              </p>
              <p>
                Feel free to contact me anytime, and I&apos;ll be happy to chat
                with you about new opportunities.
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

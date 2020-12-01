import React from 'react';

import { Container, CardDescription, Header, Content } from './styles';

import InfoCard from '../../components/InfoCard';
import Sidebar from '../../components/Sidebar';

import { ReactComponent as EmailIcon } from '../../assets/email.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg';

const Contact: React.FC = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <InfoCard />
        <CardDescription>
          <Header>
            <div />
            <h2>
              <span>Contact </span>
              Me
            </h2>
          </Header>
          <Content>
            <h2>Interested in working together?</h2>
            <div>
              <p>
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your team.
              </p>
              <div>
                <EmailIcon />
                <p>Fernando_silvasc@hotmail.com</p>
              </div>
              <div>
                <PhoneIcon />
                <p>+1 778-512-6641</p>
              </div>
            </div>
            <a
              href="mailto:fernando_silvasc@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Get in Touch
            </a>
          </Content>
        </CardDescription>
      </Container>
    </>
  );
};

export default Contact;

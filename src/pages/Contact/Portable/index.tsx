import React from 'react';
import { Container, CardDescription, Content } from './styles';

import NavBar from '../../../components/NavBar/Portable/index';
import InfoCard from '../../../components/InfoCard/Portable/index';
import Header from '../../../components/Header/index';
import Footer from '../../../components/Footer/index';

import { ReactComponent as EmailIcon } from '../../../assets/email.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/phone.svg';

const ContactPortable: React.FC = () => {
  return (
    <>
      <Container>
        <NavBar />
        <InfoCard title="contact" />
        <Header boldTitle="Contact" title="Me" />

        <CardDescription>
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
                <p>fernando_silvasc@hotmail.com</p>
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
      <Footer />
    </>
  );
};

export default ContactPortable;

import React from 'react';

import {
  Container,
  ImageBackground,
  AvatarContainer,
  Description,
  Links,
  Footer,
} from './styles';

import ImgBackground from '../../assets/imageBackground.jpg';
import ImgAvatar from '../../assets/imgAvatar.png';
import { ReactComponent as GitHub } from '../../assets/github.svg';
import { ReactComponent as LikedIn } from '../../assets/linkedIn.svg';
import { ReactComponent as Clip } from '../../assets/clip.svg';

interface Props {
  props: string;
}

const LinkProps = {
  main: 'flex',
};

let FooterProps = {
  main: '-23px',
};

if (LinkProps.main === 'none') {
  FooterProps = {
    main: '-55px',
  };
}

const InfoCard: React.FC = props => {
  return (
    <>
      <Container>
        <ImageBackground>
          <img src={ImgBackground} alt="background" />
          <div />
        </ImageBackground>

        <AvatarContainer>
          <div className="avatar">
            <img src={ImgAvatar} alt="avatar" />
          </div>
          <div />
        </AvatarContainer>

        <Description>
          <h1>Fernando Silva</h1>
          <p>FullStack Developer</p>
        </Description>

        <Links>
          <a href="/">
            <GitHub />
          </a>
          <a href="/">
            <LikedIn />
          </a>
        </Links>

        {/* {props === 'contact' ? (
          <Footer theme={FooterProps}>
            <a href="/">
              <p>Contact Me</p>
            </a>
          </Footer>
        ) : (
          <Footer theme={FooterProps}>
            <a href="/">
              <p>Resume</p>
            </a>
            <Clip />
          </Footer>
        )} */}

        <Footer>
          <a href="/">
            <p>Contact Me</p>
          </a>
        </Footer>
      </Container>
    </>
  );
};

export default InfoCard;

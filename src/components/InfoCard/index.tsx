import React from 'react';

import {
  Container,
  ImageBackground,
  Abstract,
  Content,
  Avatar,
  Description,
  Links,
  Footer,
} from './styles';

import ImgBackground from '../../assets/imageBackground.jpg';
import ImgAvatar from '../../assets/imgAvatar.png';
import { ReactComponent as GitHub } from '../../assets/github.svg';
import { ReactComponent as LikedIn } from '../../assets/linkedIn.svg';
import { ReactComponent as Clip } from '../../assets/clip.svg';

interface InfoCardProps {
  title: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title }: InfoCardProps) => {
  return (
    <>
      <Container>
        <ImageBackground>
          <img src={ImgBackground} alt="background" />
          <Abstract />
        </ImageBackground>

        <Content>
          <Avatar>
            <div className="avatar">
              <img src={ImgAvatar} alt="avatar" />
            </div>
            <div />
          </Avatar>

          <Description>
            <h1>Fernando Silva</h1>
            <p>FullStack Developer</p>

            {title !== 'home' && (
              <Links>
                <a href="/">
                  <GitHub />
                </a>
                <a href="/">
                  <LikedIn />
                </a>
              </Links>
            )}
          </Description>
        </Content>

        {title !== 'contact' ? (
          <Footer>
            <a href="/">
              <p>Contact Me</p>
            </a>
          </Footer>
        ) : (
          <Footer>
            <a href="/">
              <p>Resume</p>
            </a>
            <Clip />
          </Footer>
        )}
      </Container>
    </>
  );
};

export default InfoCard;

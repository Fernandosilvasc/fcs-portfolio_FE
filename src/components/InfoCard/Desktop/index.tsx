import React from 'react';

import {
  Container,
  ImageBackground,
  Abstract,
  Content,
  Avatar,
  InfoDescription,
  Links,
  Footer,
} from './styles';

import ImgBackground from '../../../assets/infoBackground.png';
import ImgAvatar from '../../../assets/imgAvatar.2.png';
import { ReactComponent as GitHub } from '../../../assets/github.svg';
import { ReactComponent as LikedIn } from '../../../assets/linkedIn.svg';
import { ReactComponent as Clip } from '../../../assets/clip.svg';
import GetLinks from '../../../util/links';

interface InfoCardProps {
  title: string;
}

const link = GetLinks();
const InfoCardDesktop: React.FC<InfoCardProps> = ({ title }: InfoCardProps) => {
  return (
    <>
      <Container>
        <ImageBackground>
          <img src={ImgBackground} alt="background" />
        </ImageBackground>
        <Abstract />

        <Content>
          <Avatar>
            <div className="avatar">
              <img src={ImgAvatar} alt="avatar" />
            </div>
            <div />
          </Avatar>

          <InfoDescription>
            <h1>Fernando Silva</h1>
            <p>FullStack Developer</p>

            {title !== 'home' && (
              <Links>
                <a href={link.gitHub} target="_blank" rel="noreferrer">
                  <GitHub />
                </a>
                <a href={link.linkedin} target="_blank" rel="noreferrer">
                  <LikedIn />
                </a>
              </Links>
            )}
          </InfoDescription>
        </Content>

        {title !== 'contact' ? (
          <Footer>
            <a href={link.email} target="_blank" rel="noreferrer">
              <p>Contact Me</p>
            </a>
          </Footer>
        ) : (
          <Footer>
            <a href={link.resume} target="_blank" rel="noreferrer">
              <p>Resume</p>
              <Clip />
            </a>
          </Footer>
        )}
      </Container>
    </>
  );
};

export default InfoCardDesktop;

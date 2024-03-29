import React from 'react';

import {
  Container,
  Avatar,
  Description,
  BoxInfo,
  SocialMediaLinks,
  AlternativeLink,
} from './styles';

import ImgAvatar from '../../../assets/imgAvatar.2.png';
import { ReactComponent as GitHub } from '../../../assets/github2.svg';
import { ReactComponent as LikedIn } from '../../../assets/linkedIn2.svg';
import { ReactComponent as Clip } from '../../../assets/clip.svg';
import GetLinks from '../../../util/links';

interface InfoCardProps {
  title: string;
}

const link = GetLinks();
const InfoCardPortable: React.FC<InfoCardProps> = ({
  title,
}: InfoCardProps) => {
  return (
    <>
      <Container>
        <Avatar>
          <div className="avatar">
            <img src={ImgAvatar} alt="avatar" />
          </div>
          <div />
        </Avatar>

        <BoxInfo>
          <Description>
            <h1>Fernando Silva</h1>
            <p>FullStack Developer</p>
          </Description>

          <SocialMediaLinks title={title}>
            <a href={link.gitHub} target="_blank" rel="noreferrer">
              <GitHub />
            </a>
            <a href={link.linkedin} target="_blank" rel="noreferrer">
              <LikedIn />
            </a>
          </SocialMediaLinks>
        </BoxInfo>

        {title !== 'contact' ? (
          <AlternativeLink>
            <a href={link.email} target="_blank" rel="noreferrer">
              <p>Contact Me</p>
            </a>
          </AlternativeLink>
        ) : (
          <AlternativeLink>
            <a href={link.resume} target="_blank" rel="noreferrer">
              <p>Resume</p>
              <Clip />
            </a>
          </AlternativeLink>
        )}
      </Container>
    </>
  );
};

export default InfoCardPortable;

import React from 'react';

import {
  Container,
  Avatar,
  Description,
  BoxInfo,
  SocialMediaLinks,
  AlternativeLink,
} from './styles';

import ImgAvatar from '../../../assets/imgAvatar.png';
import { ReactComponent as GitHub } from '../../../assets/github2.svg';
import { ReactComponent as LikedIn } from '../../../assets/linkedIn2.svg';
import { ReactComponent as Clip } from '../../../assets/clip.svg';

interface InfoCardProps {
  title: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title }: InfoCardProps) => {
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

          {/* {title !== 'home' && (
            <SocialMediaLinks>
              <a
                href="https://github.com/Fernandosilvasc"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
              <a
                href="https://www.linkedin.com/in/fernando-correa-da-silva/"
                target="_blank"
                rel="noreferrer"
              >
                <LikedIn />
              </a>
            </SocialMediaLinks>
          )} */}

          <SocialMediaLinks title={title}>
            <a
              href="https://github.com/Fernandosilvasc"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/fernando-correa-da-silva/"
              target="_blank"
              rel="noreferrer"
            >
              <LikedIn />
            </a>
          </SocialMediaLinks>
        </BoxInfo>

        {title !== 'contact' ? (
          <AlternativeLink>
            <a
              href="mailto:fernando_silvasc@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <p>Contact Me</p>
            </a>
          </AlternativeLink>
        ) : (
          <AlternativeLink>
            <a
              href="https://app.luminpdf.com/viewer/5fcb15c526f8530011ad2fc3"
              target="_blank"
              rel="noreferrer"
            >
              <p>Resume</p>
              <Clip />
            </a>
          </AlternativeLink>
        )}
      </Container>
    </>
  );
};

export default InfoCard;

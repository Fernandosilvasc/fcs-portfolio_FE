import styled, { css } from 'styled-components';

import imgBackground from '../../../assets/infoBackgroundPortable.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1f1f23;
  font-family: Poppins;
`;

export const Avatar = styled.div`
  position: relative;
  left: -250px;
  height: 100px;

  .avatar {
    position: relative;
    top: 0;
    left: 0;
    width: 155px;
    height: 155px;
    background: #fe7f2d;
    border-radius: 50%;
    overflow: hidden;
    index: 1000;

    img {
      padding-left: 10px;
      width: 90%;
      transform: rotate(-15deg);
      overflow: hidden;
    }
  }

  div {
    position: relative;
    top: -150px;
    left: -10px;
    width: 155px;
    height: 155px;
    border-radius: 50%;
    background: linear-gradient(
      145.12deg,
      rgba(255, 152, 0, 0.2) 13.2%,
      rgba(255, 152, 0, 0) 95.36%
    );
  }
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 590px;
  height: 340px;
  border: 2px solid #efefd0;
  border-radius: 5px;
  background-image: url(${imgBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;

  h1 {
    margin: 10px 0;
    font-weight: 500;
    font-size: 36px;
    color: #efefd0;
  }

  p {
    margin: 0;
    font-weight: 500;
    font-size: 18px;
    color: #fe7f2d;
  }
`;

interface SocialMediaLinksProps {
  title: string;
}

export const SocialMediaLinks = styled.div<SocialMediaLinksProps>`
  max-height: 30px;
  margin-left: 50px;

  ${(props: { title: string }) =>
    props.title === 'home' &&
    css`
      visibility: hidden;
    `}

  a {
    svg {
      margin-left: 5px;
      background: #efefd0;
      border-radius: 2px 2px 0 0;
      transition: all 0.4s;
    }
    &:hover {
      cursor: pointer;
      svg {
        background: #fe7f2d;
      }
    }
  }
`;

export const AlternativeLink = styled.div`
  width: 125px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -35px;
  left: 233px;
  border: 2px solid #efefd0;
  border-radius: 5px;
  background: #31313a;
  transition: all 0.4s;

  a {
    display: flex;
    text-decoration: none;
    transition: all 0.4s;

    p {
      margin: 0px;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      color: #efefd0;
      transition: all 0.4s;
    }

    svg {
      margin-left: 5px;
      path {
        transition: all 0.4s;
      }
    }
  }

  &:hover {
    border: 2px solid #fe7f2d;

    a {
      p {
        color: #fe7f2d;
      }
      svg {
        path {
          fill: #fe7f2d;
        }
      }
    }
  }
`;

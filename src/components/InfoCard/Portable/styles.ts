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
    z-index: 1000;

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
    z-index: 900;
  }

  @media screen and (max-width: 768px) {
    top: 20px;
    left: -210px;

    .avatar {
      width: 130px;
      height: 130px;
    }

    div {
      top: -125px;
      left: -10px;
      width: 130px;
      height: 130px;
    }
  }

  @media screen and (max-width: 600px) {
    top: 30px;
    left: -170px;
    height: 100px;

    .avatar {
      width: 110px;
      height: 110px;
    }

    div {
      top: -105px;
      left: -10px;
      width: 110px;
      height: 110px;
    }
  }

  @media screen and (max-width: 480px) {
    top: 40px;
    left: -150px;
    height: 100px;

    .avatar {
      width: 90px;
      height: 90px;

      img {
        padding-left: 5px;
      }
    }

    div {
      top: -85px;
      left: -10px;
      width: 90px;
      height: 90px;
    }
  }

  @media screen and (max-width: 380px) {
    top: 50px;
    left: -130px;
    height: 100px;

    .avatar {
      width: 75px;
      height: 75px;
    }

    div {
      top: -70px;
      left: -10px;
      width: 75px;
      height: 75px;
    }
  }

  @media screen and (max-width: 350px) {
    top: 60px;
    left: 0px;
    height: 100px;

    .avatar {
      display: flex;
      border: 2px solid #efefd0;
      width: 70px;
      height: 70px;
    }

    div {
      display: none;
    }
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

  @media screen and (max-width: 768px) {
    width: 490px;
    height: 280px;
  }

  @media screen and (max-width: 600px) {
    width: 390px;
    height: 250px;
  }

  @media screen and (max-width: 480px) {
    width: 330px;
    height: 210px;
  }

  @media screen and (max-width: 380px) {
    width: 290px;
    height: 190px;
  }

  @media screen and (max-width: 350px) {
    width: 270px;
    height: 190px;
  } ;
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

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;

    h1 {
      margin: 10px 0;
      font-size: 28px;
    }

    p {
      margin: 0;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 40px;

    h1 {
      margin: 10px 0;
      font-size: 28px;
    }

    p {
      margin: 0;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 40px;

    h1 {
      margin: 5px 0;
      font-size: 22px;
    }

    p {
      margin: 0;
      font-size: 12px;
    }
  }
`;

interface SocialMediaLinksProps {
  title: string;
}

export const SocialMediaLinks = styled.div<SocialMediaLinksProps>`
  max-height: 30px;
  margin-left: 40px;

  ${(props: { title: string }) =>
    props.title === 'home' &&
    css`
      visibility: hidden;
    `}

  a {
    svg {
      margin-left: 8px;
      background: #efefd0;
      border-radius: 2px 2px 0 0;
      transition: background 0.4s;
    }
    &:hover {
      cursor: pointer;
      svg {
        background: #fe7f2d;
      }
    }
  }

  @media screen and (max-width: 768px) {
    max-height: 25px;
    margin-left: 40px;

    a {
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    max-height: 23px;
    margin-left: 30px;

    a {
      svg {
        width: 23px;
        height: 23px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    max-height: 20px;
    margin-left: 20px;

    a {
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  @media screen and (max-width: 380px) {
    max-height: 19px;
    margin-left: 20px;

    a {
      svg {
        width: 19px;
        height: 19px;
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
  transition: border-color 0.4s;

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;

    p {
      margin: 0px;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      color: #efefd0;
      transition: color 0.4s;
    }

    svg {
      margin-left: 5px;
      path {
        transition: fill 0.4s;
      }
    }
  }

  &:hover {
    border-color: #fe7f2d;

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

  @media screen and (max-width: 768px) {
    width: 110px;
    height: 40px;
    top: -30px;
    left: 190px;

    a {
      p {
        font-size: 12px;
      }

      svg {
        width: 9px;
        height: 18px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 90px;
    height: 35px;
    top: -30px;
    left: 150px;

    a {
      p {
        font-size: 10px;
      }

      svg {
        width: 7px;
        height: 16px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: 75px;
    height: 33px;
    top: -30px;
    left: 128px;

    a {
      p {
        font-size: 9px;
      }

      svg {
        width: 6px;
        height: 15px;
      }
    }
  }

  @media screen and (max-width: 380px) {
    width: 60px;
    height: 27px;
    top: -25px;
    left: 115px;

    a {
      p {
        font-size: 8px;
      }

      svg {
        width: 6px;
        height: 14px;
      }
    }
  }

  @media screen and (max-width: 350px) {
    width: 60px;
    height: 27px;
    top: -25px;
    left: 105px;

    a {
      p {
        font-size: 8px;
      }

      svg {
        width: 6px;
        height: 14px;
      }
    }
  }
`;

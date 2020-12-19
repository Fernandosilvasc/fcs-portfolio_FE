import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  scrollbar-width: thin;
  scrollbar-color: #65656c transparent;

  *::-webkit-scrollbar {
    width: 0.3125rem;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #65656c;
    border-radius: 1.25rem;
  }
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 590px;
  background: #31313a;
  border: 2px solid #efefd0;
  border-radius: 5px;
  margin: 40px 0 120px 0;

  & > a {
    width: 60px;
    position: relative;
    left: 245px;
    margin: 20px;
    text-decoration: none;
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    color: #efefd0;
    padding: 10px 0;
    border: 1px solid rgba(254, 127, 45, 0.9);
    border-radius: 5px;
    transition: background 0.4s;

    &:hover {
      background: rgba(254, 127, 45, 0.9);
    }
  }

  @media screen and (max-width: 768px) {
    width: 490px;
    margin: 40px 0 100px 0;

    & > a {
      left: 195px;
    }
  }

  @media screen and (max-width: 600px) {
    width: 390px;
    margin: 40px 0 100px 0;

    & > a {
      width: 50px;
      font-size: 9px;
      padding: 9px 0;
      left: 145px;
    }
  }

  @media screen and (max-width: 480px) {
    width: 330px;
    margin: 30px 0 80px 0;

    & > a {
      width: 50px;
      font-size: 9px;
      padding: 9px 0;
      left: 125px;
      margin: 15px;
    }
  }

  @media screen and (max-width: 380px) {
    width: 290px;
    margin: 30px 0 80px 0;

    & > a {
      width: 50px;
      font-size: 8px;
      padding: 8px 0;
      left: 105px;
      margin: 15px;
    }
  }

  @media screen and (max-width: 350px) {
    width: 270px;
    margin: 20px 0 80px 0;

    & > a {
      left: 95px;
    }
  }
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 30px 20px 30px 0;
  font-family: 'Poppins';

  a {
    padding: 10px 15px;
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
    background: rgba(254, 127, 45, 0.9);
    border: none;
    border-radius: 0.3125rem;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    text-decoration: none;
    color: #efefd0;
    margin-right: 0.625rem;
    transition: all 0.4s;

    &:hover {
      background: ${shade(0.2, 'rgba(254, 127, 45, 0.9)')};
      color: ${shade(0.2, '#efefd0')};
    }
  }

  a:nth-child(2) {
    background: none;
    border: 1px solid rgba(254, 127, 45, 0.9);
    border-radius: 0.3125rem;

    &:hover {
      color: ${shade(0.2, '#efefd0')};
    }
  }

  @media screen and (max-width: 768px) {
    margin: 30px 20px 30px 0;

    a {
      padding: 8px 13px;
      font-size: 10px;
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 20px 20px 30px 0;

    a {
      padding: 7px 11px;
      font-size: 9px;
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 480px) {
    a {
      padding: 6px 9px;
      font-size: 8px;
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 380px) {
    a {
      padding: 5px 8px;
      font-size: 8px;
      margin-right: 8px;
    }
  }

  @media screen and (max-width: 350px) {
    a {
      padding: 4px 7px;
      font-size: 7px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  img {
    margin-top: 3.125rem;
    width: 354px;
    height: 232px;
  }

  @media screen and (max-width: 768px) {
    img {
      margin-top: 50px;
      width: 300px;
      height: 210px;
    }
  }

  @media screen and (max-width: 600px) {
    img {
      margin-top: 40px;
      width: 250px;
      height: 170px;
    }
  }

  @media screen and (max-width: 480px) {
    img {
      margin-top: 30px;
      width: 230px;
      height: 150px;
    }
  }

  @media screen and (max-width: 350px) {
    img {
      margin-top: 20px;
      width: 210px;
      height: 140px;
    }
  }
`;

export const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 370px;
    overflow: hidden;
  }

  @media screen and (max-width: 600px) {
    width: 315px;
  }

  @media screen and (max-width: 480px) {
    width: 270px;
  }

  @media screen and (max-width: 380px) {
    width: 230px;
  }

  @media screen and (max-width: 350px) {
    width: 210px;
  }
`;

export const Technologies = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.125rem;
  font-family: Poppins;

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    color: #efefd0;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    color: #efefd0;

    div {
      border-right: 1px solid #efefd0;
      padding-right: 0.3125rem;
      margin: 5px 5px 0 0;

      span {
        color: #efefd0;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 13px;
        padding: 0.625rem;
        background: rgba(254, 127, 45, 0.9);
        border-radius: 0.1875rem;
      }

      &:last-child {
        border-right: none;
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 40px;

    h2 {
      font-size: 15px;
    }

    div {
      div {
        span {
          font-size: 11px;
          line-height: 12px;
          padding: 9px;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    margin-top: 40px;

    h2 {
      font-size: 14px;
    }

    div {
      div {
        span {
          font-size: 10px;
          line-height: 11px;
          padding: 8px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    margin-top: 30px;

    h2 {
      font-size: 13px;
    }

    div {
      div {
        span {
          font-size: 9px;
          line-height: 10px;
          padding: 7px;
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    h2 {
      font-size: 12px;
    }

    div {
      div {
        span {
          font-size: 8px;
          line-height: 9px;
          padding: 6px;
        }
      }
    }
  }
`;

export const Tools = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  font-family: Poppins;

  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 0.625rem;
    color: #efefd0;
    margin-right: 1.25rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    color: #efefd0;

    div {
      border-right: 1px solid #efefd0;
      padding-right: 0.3125rem;
      margin: 5px 5px 0 0;

      span {
        color: #efefd0;
        font-family: Poppins;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 0.8125rem;
        padding: 0.625rem;
        border: 2px solid rgba(254, 127, 45, 0.9);
        border-radius: 0.1875rem;
      }

      &:last-child {
        border-right: none;
      }
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 15px;
    }

    div {
      div {
        span {
          font-size: 11px;
          line-height: 12px;
          padding: 9px;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 14px;
    }

    div {
      div {
        span {
          font-size: 10px;
          line-height: 11px;
          padding: 8px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    h2 {
      font-size: 13px;
    }

    div {
      div {
        span {
          font-size: 9px;
          line-height: 10px;
          padding: 7px;
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    h2 {
      font-size: 12px;
    }

    div {
      div {
        span {
          font-size: 8px;
          line-height: 9px;
          padding: 6px;
        }
      }
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.125rem 0;
  font-family: Poppins;

  h2 {
    font-weight: 600;
    font-size: 16px;
    color: #efefd0;
    margin: 30px 0;
  }

  div {
    width: 415px;

    h3 {
      margin: 1.25rem 0px;
      font-size: 20px;
      color: #fe7f2d;
    }

    h4 {
      font-size: 1rem;
      color: #fe7f2d;
    }

    p {
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.875rem;
      color: rgba(245, 245, 245, 0.55);
      margin: 0px;
    }

    div {
      p {
        margin-left: 0.625rem;
        font-size: 0.8125rem;
        line-height: 25px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin: 50px 0;

    h2 {
      font-size: 15px;
      margin: 20px 0;
    }

    div {
      width: 370px;

      h3 {
        margin: 20px 0rem;
        font-size: 18px;
      }

      h4 {
        font-size: 14px;
      }

      p {
        font-size: 14px;
        line-height: 30px;
      }

      div {
        p {
          font-size: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    margin: 40px 0;

    h2 {
      font-size: 14px;
      margin: 20px 0;
    }

    div {
      width: 315px;

      h3 {
        margin: 18px 0;
        font-size: 16px;
      }

      h4 {
        font-size: 13px;
      }

      p {
        font-size: 13px;
        line-height: 28px;
      }

      div {
        p {
          font-size: 11px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    margin: 30px 0;

    h2 {
      font-size: 13px;
      margin: 20px 0;
    }

    div {
      width: 270px;

      h3 {
        margin: 18px 0;
        font-size: 15px;
      }

      h4 {
        font-size: 12px;
      }

      p {
        font-size: 12px;
        line-height: 27px;
      }

      div {
        p {
          font-size: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 380px) {
    margin: 30px 0;

    h2 {
      font-size: 13px;
      margin: 20px 0;
    }

    div {
      width: 230px;

      h3 {
        margin: 18px 0;
        font-size: 15px;
      }

      h4 {
        font-size: 12px;
      }

      p {
        font-size: 12px;
        line-height: 27px;
      }

      div {
        p {
          font-size: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    margin: 20px 0;

    h2 {
      font-size: 12px;
      margin: 15px 0;
    }

    div {
      width: 210px;

      h3 {
        margin: 16px 0;
        font-size: 14px;
      }

      h4 {
        font-size: 11px;
      }

      p {
        font-size: 11px;
        line-height: 25px;
      }

      div {
        p {
          font-size: 10px;
        }
      }
    }
  }
`;

import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 95vh;

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

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 840px;
  height: 800px;
  background: #31313a;
  border-radius: 0.625rem;

  & > a {
    width: 60px;
    position: relative;
    right: -740px;
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

  @media screen and (max-width: 1400px) {
    width: 750px;
    height: 720px;
  }

  @media screen and (max-width: 1200px) {
    width: 750px; // change later
    height: 720px; // change later
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.375rem;
  border-bottom: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    90deg,
    #c4c4c4 -100%,
    rgba(196, 196, 196, 0) 100%
  );

  div {
    display: flex;
    align-items: center;
    div {
      width: 2.3125rem;
      height: 2.3125rem;
      margin-left: 1.25rem;
      border-radius: 50%;
      background: linear-gradient(
        140.24deg,
        rgba(254, 127, 45, 0.9) -80.84%,
        rgba(255, 152, 0, 0.01) 82.68%
      );
    }

    h2 {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 1.25rem;
      line-height: 0.8125rem;
      color: #efefd0;
      position: relative;
      left: -2.5rem;
      color: #fe7f2d;

      span {
        color: #fe7f2d;
      }
    }
  }

  div {
    display: flex;
    margin-right: 1.25rem;

    a {
      padding: 0.625rem;
      font-weight: bold;
      font-size: 0.75rem;
      background: rgba(254, 127, 45, 0.9);
      border: none;
      border-radius: 0.3125rem;
      filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
      text-decoration: none;
      color: #efefd0;
      margin-right: 0.625rem;

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
  }

  @media screen and (max-width: 1400px) {
    height: 3.75rem;

    div {
      div {
        width: 2.125rem;
        height: 2.125rem;
      }

      h2 {
        font-size: 1.125rem;
      }
    }

    div {
      a {
        padding: 10px;
        font-size: 10px;
        margin-right: 10px;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    height: 3.125rem;

    div {
      div {
        width: 1.875rem;
        height: 1.875rem;
      }

      h2 {
        font-size: 1rem;
        left: -40px;
      }
    }

    div {
      a {
        padding: 10px;
        font-size: 8px;
        margin-right: 10px;
      }
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

  @media screen and (max-width: 1400px) {
    img {
      margin-top: 40px;
      width: 330px;
      height: 220px;
    }
  }
  @media screen and (max-width: 1200px) {
    img {
      margin-top: 30px;
      width: 300px;
      height: 210px;
    }
  }
`;

export const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Technologies = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.125rem;

  h2 {
    width: 7.1875rem;
    text-align: right;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    color: #efefd0;
    margin-right: 1.25rem;
  }

  div {
    display: flex;
    color: #efefd0;

    div {
      border-right: 1px solid #efefd0;
      padding-right: 0.3125rem;
      margin-right: 0.3125rem;

      span {
        color: #efefd0;
        font-family: Poppins;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 0.8125rem;
        padding: 0.625rem;
        background: rgba(254, 127, 45, 0.9);
        border-radius: 0.1875rem;
      }

      &:last-child {
        border-right: none;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    margin-top: 50px;

    h2 {
      width: 115px;
      font-size: 14px;
      margin-right: 20px;
    }

    div {
      div {
        padding-right: 5px;
        margin-right: 5px;

        span {
          font-size: 11px;
          line-height: 13px;
          padding: 10px;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
  }
`;

export const Tools = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.25rem;

  h2 {
    width: 7.1875rem;
    text-align: right;
    font-family: Poppins;
    font-weight: 600;
    font-size: 1rem;
    line-height: 0.625rem;
    color: #efefd0;
    margin-right: 1.25rem;
  }

  div {
    display: flex;
    color: #efefd0;

    div {
      border-right: 1px solid #efefd0;
      padding-right: 0.3125rem;
      margin-right: 0.3125rem;

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

  @media screen and (max-width: 1400px) {
    h2 {
      width: 115px;
      font-size: 14px;
      margin-right: 20px;
    }

    div {
      div {
        padding-right: 5px;
        margin-right: 5px;

        span {
          font-size: 11px;
          line-height: 13px;
          padding: 10px;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
  }
`;

export const Description = styled.div`
  display: flex;
  margin: 3.125rem 0;
  font-family: Poppins;

  h2 {
    width: 7.1875rem;
    text-align: right;
    font-weight: 600;
    font-size: 1rem;
    color: #efefd0;
    margin: 1.25rem 1.25rem 0 0;
  }

  div {
    width: 25.9375rem;

    h3 {
      margin: 1.25rem 0px;
      font-size: 1.25rem;
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
      }
    }
  }

  @media screen and (max-width: 1400px) {
    margin: 40px 0;

    h2 {
      width: 115px;
      font-size: 14px;
      margin: 20px 20px 0 0;
    }

    div {
      width: 415px;

      h3 {
        margin: 18px 0rem;
        font-size: 18px;
      }

      h4 {
        font-size: 16px;
      }

      p {
        font-size: 16px;
        line-height: 30px;
        margin: 0rem;
      }

      div {
        p {
          margin-left: 10px;
          font-size: 13px;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
  }
`;

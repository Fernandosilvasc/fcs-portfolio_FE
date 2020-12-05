import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  scrollbar-width: thin;
  scrollbar-color: #65656c transparent;

  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #65656c;
    border-radius: 20px;
  }
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 840px;
  height: 800px;
  background: #31313a;
  border-radius: 10px;

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
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
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
      width: 37px;
      height: 37px;
      margin-left: 20px;
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
      font-size: 20px;
      line-height: 13px;
      color: #efefd0;
      position: relative;
      left: -48px;

      span {
        color: #fe7f2d;
      }
    }
  }

  div {
    display: flex;
    margin-right: 20px;

    a {
      padding: 10px;
      font-weight: bold;
      font-size: 12px;
      background: rgba(254, 127, 45, 0.9);
      border: none;
      border-radius: 5px;
      filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
      text-decoration: none;
      color: #efefd0;
      margin-right: 10px;

      &:hover {
        background: ${shade(0.2, 'rgba(254, 127, 45, 0.9)')};
        color: ${shade(0.2, '#efefd0')};
      }
    }

    a:nth-child(2) {
      background: none;
      border: 1px solid rgba(254, 127, 45, 0.9);
      border-radius: 5px;

      &:hover {
        color: ${shade(0.2, '#efefd0')};
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
    margin-top: 50px;
    width: 354px;
    height: 232px;
  }
`;

export const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Technologies = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;

  h2 {
    width: 115px;
    text-align: right;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 10px;
    color: #efefd0;
    margin-right: 20px;
  }

  div {
    display: flex;
    gap: 5px;
    color: #efefd0;

    div {
      border-right: 1px solid #efefd0;
      padding-right: 5px;

      span {
        color: #efefd0;
        font-family: Poppins;
        font-weight: 500;
        font-size: 12px;
        line-height: 13px;
        padding: 10px;
        background: rgba(254, 127, 45, 0.9);
        border-radius: 3px;
      }

      &:last-child {
        border-right: none;
      }
    }
  }
`;

export const Tools = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  h2 {
    width: 115px;
    text-align: right;
    font-family: Poppins;
    font-weight: 600;
    font-size: 16px;
    line-height: 10px;
    color: #efefd0;
    margin-right: 20px;
  }

  div {
    display: flex;
    gap: 5px;
    color: #efefd0;

    div {
      border-right: 1px solid #efefd0;
      padding-right: 5px;

      span {
        color: #efefd0;
        font-family: Poppins;
        font-weight: 500;
        font-size: 12px;
        line-height: 13px;
        padding: 10px;
        border: 2px solid rgba(254, 127, 45, 0.9);
        border-radius: 3px;
      }

      &:last-child {
        border-right: none;
      }
    }
  }
`;

export const Description = styled.div`
  display: flex;
  margin: 50px 0;
  font-family: Poppins;

  h2 {
    width: 115px;
    text-align: right;
    font-weight: 600;
    font-size: 16px;
    color: #efefd0;
    margin: 20px 20px 0 0;
  }

  div {
    width: 415px;

    h3 {
      margin: 20px 0px;
      font-size: 20px;
      color: #fe7f2d;
    }

    h4 {
      font-size: 16px;
      color: #fe7f2d;
    }

    p {
      font-weight: 300;
      font-size: 16px;
      line-height: 30px;
      color: rgba(245, 245, 245, 0.55);
      margin: 0px;
    }

    div {
      p {
        margin-left: 10px;
        font-size: 13px;
      }
    }
  }
`;

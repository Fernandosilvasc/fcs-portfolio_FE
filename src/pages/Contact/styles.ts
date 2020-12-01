import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 685px;
  height: 685px;
  background: #31313a;
`;

export const Header = styled.header`
  display: flex;
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
    left: -18px;

    span {
      color: #fe7f2d;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  font-family: Poppins;

  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    color: #efefd0;
    margin: 70px 0;
  }

  div {
    p {
      width: 485px;
      font-weight: 500;
      font-size: 15px;
      line-height: 24px;
      color: #fe7f2d;
      margin: 0;
    }

    div {
      display: flex;
      margin-top: 40px;

      svg {
        width: 27px;
        height: 27px;
        margin: 0;
        margin-right: 10px;
      }

      p {
        margin: 0;
        font-weight: 500;
        font-size: 12px;
        line-height: 24px;
      }
    }

    & + div {
      margin-top: 16px;
    }
  }

  a {
    position: relative;
    top: 150px;
    padding: 15px;
    font-weight: bold;
    font-size: 12px;
    line-height: 13px;
    background: rgba(254, 127, 45, 0.9);
    border-radius: 5px;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    text-decoration: none;
    color: #efefd0;
    transition: background 0.4s;

    &:hover {
      background: ${shade(0.2, 'rgba(254, 127, 45, 0.9)')};
      color: ${shade(0.2, '#efefd0')};
    }
  }
`;
